import ContactForm from '@/components/pages/contact-form';
import HeadingText from '@/components/heading-text';

export const metadata = {
  title: 'Contact',
};

export default function Contact() {
  return (
    <main className="container mx-auto flex flex-col items-center px-4 py-8">
      <div className="flex flex-col items-center space-y-2 text-center">
        <HeadingText subtext="Send a message through email">
          Contact
        </HeadingText>
      </div>
      <ContactForm />
    </main>
  );
}
