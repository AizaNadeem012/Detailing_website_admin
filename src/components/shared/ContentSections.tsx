import { CheckCircle } from 'lucide-react';
import type { ContentSection } from '@/data/types';

interface ContentSectionsProps {
  sections: ContentSection[];
}

export function ContentSections({ sections }: ContentSectionsProps) {
  return (
    <>
      {sections.map((section, index) => (
        <section key={index} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {section.heading}
          </h2>

          {/* Single-paragraph body */}
          {section.body && (
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
              <p>{section.body}</p>
            </div>
          )}

          {/* Multi-paragraph body — use for definition/long-form sections */}
          {section.bodyParagraphs && section.bodyParagraphs.length > 0 && (
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-4">
              {section.bodyParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}

          {/* 2-column grid with tick icons */}
          {section.type === 'list' && section.items && (
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {section.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          )}

          {/* Numbered process steps */}
          {section.type === 'process' && section.items && (
            <div className="space-y-4 mt-4">
              {section.items.map((step, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          )}

          {/* Green-tick checklist */}
          {section.type === 'checklist' && section.items && (
            <div className="space-y-3 mt-4">
              {section.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          )}

          {/* Comparison table — feature | option A | option B */}
          {section.type === 'comparison' && section.comparison && (
            <div className="overflow-x-auto mt-6 rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-primary text-white">
                    {section.comparison.headers.map((header, i) => (
                      <th
                        key={i}
                        className="text-left p-4 font-semibold whitespace-nowrap"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.comparison.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={`p-4 text-slate-700 border-b border-slate-100 align-top ${
                            j === 0 ? 'font-semibold text-slate-900 w-1/4' : ''
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ))}
    </>
  );
}
