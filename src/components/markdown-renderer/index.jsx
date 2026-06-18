import { FormattedText } from 'drupal-canvas';
import { marked } from 'marked';

const MarkdownRenderer = ({ heading = 'Markdown preview', markdown = '' }) => {
  const html = marked.parse(markdown);

  return (
    <section className="space-y-3 rounded-lg border border-slate-200 p-4">
      <h2 className="text-lg font-semibold text-slate-900">{heading}</h2>
      <FormattedText className="prose prose-slate max-w-none">
        {html}
      </FormattedText>
    </section>
  );
};

export default MarkdownRenderer;
