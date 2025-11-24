import HeadingText from '@/components/heading-text';
import { featureCards } from '@/config/contents';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';

export default function FeatureCards() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="space-y-8 px-4 py-12 text-center lg:py-20">
        {featureCards.header || featureCards.subheader ? (
          <HeadingText subtext={featureCards.subheader}>
            {featureCards.header}
          </HeadingText>
        ) : null}
        <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-3 lg:px-9">
          {featureCards.content.map((cards) => {
            const Icon = Icons[cards.icon || 'blank'];

            return (
              <Card
                key={cards.text}
                className="dark:bg-secondary flex grow flex-col items-center justify-between gap-4 p-8"
              >
                <div className="flex">
                  <Icon className="h-24 w-24" />
                </div>
                <div className="space-y-2">
                  <CardTitle>{cards.text}</CardTitle>
                  <CardDescription>{cards.subtext}</CardDescription>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
