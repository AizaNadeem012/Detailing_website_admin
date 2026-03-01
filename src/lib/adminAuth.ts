// Utility functions for admin authentication and credential management

// Key for storing admin credentials in localStorage
const ADMIN_CREDENTIALS_KEY = 'admin_credentials';

// Interface for admin credentials
interface AdminCredentials {
  username: string;
  passwordHash: string;
  salt: string;
}

/**
 * Hash a password using Web Crypto API
 */
export async function hashPassword(password: string, salt: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + salt);
  
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Generate a random salt for password hashing
 */
export async function generateSalt(): Promise<string> {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Store admin credentials in localStorage
 */
export async function storeCredentials(username: string, password: string): Promise<void> {
  const salt = await generateSalt();
  const passwordHash = await hashPassword(password, salt);
  
  const credentials: AdminCredentials = {
    username,
    passwordHash,
    salt
  };
  
  if (typeof window !== 'undefined') {
    localStorage.setItem(ADMIN_CREDENTIALS_KEY, JSON.stringify(credentials));
  }
}

/**
 * Get stored admin credentials from localStorage
 */
export function getStoredCredentials(): AdminCredentials | null {
  if (typeof window === 'undefined') return null;
  
  const stored = localStorage.getItem(ADMIN_CREDENTIALS_KEY);
  if (!stored) return null;

  try {
    return JSON.parse(stored) as AdminCredentials;
  } catch (error) {
    console.error('Error parsing stored credentials:', error);
    return null;
  }
}

/**
 * Authenticate admin with provided credentials
 */
export async function authenticateAdmin(inputUsername: string, inputPassword: string): Promise<boolean> {
  const storedCredentials = getStoredCredentials();
  if (!storedCredentials) {
    // If no stored credentials exist, use default credentials
    return inputUsername === 'admin' && inputPassword === 'srvadmin2024';
  }
  
  const { username, passwordHash, salt } = storedCredentials;
  
  if (inputUsername !== username) {
    return false;
  }
  
  const inputPasswordHash = await hashPassword(inputPassword, salt);
  return inputPasswordHash === passwordHash;
}

/**
 * Authenticate admin with only password (for pages that don't have username)
 * This function checks against the stored username
 */
export async function authenticateAdminWithPasswordOnly(inputPassword: string): Promise<boolean> {
  const storedCredentials = getStoredCredentials();
  if (!storedCredentials) {
    // If no stored credentials exist, use default credentials
    return inputPassword === 'srvadmin2024';
  }
  
  const { username, passwordHash, salt } = storedCredentials;
  
  const inputPasswordHash = await hashPassword(inputPassword, salt);
  return inputPasswordHash === passwordHash;
}

/**
 * Check if admin is authenticated
 */
export function isAdminAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('adminAuthenticated') === 'true';
}

/**
 * Set admin authentication status
 */
export function setAdminAuthentication(authenticated: boolean): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('adminAuthenticated', authenticated ? 'true' : 'false');
  }
}

/**
 * Clear admin authentication
 */
export function clearAdminAuthentication(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('adminAuthenticated');
  }
}

/**
 * Change admin credentials
 */
export async function changeAdminCredentials(
  currentUsername: string, 
  currentPassword: string, 
  newUsername: string, 
  newPassword: string
): Promise<{ success: boolean; error?: string }> {
  // First authenticate with current credentials
  const isAuthenticated = await authenticateAdmin(currentUsername, currentPassword);
  if (!isAuthenticated) {
    return { success: false, error: 'Current username or password is incorrect.' };
  }
  
  // Store new credentials
  try {
    await storeCredentials(newUsername, newPassword);
    return { success: true };
  } catch (error) {
    console.error('Error changing credentials:', error);
    return { success: false, error: 'Failed to update credentials.' };
  }
}