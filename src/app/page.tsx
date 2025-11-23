import { Button } from '../components/ui/button';

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="mt-20 text-center text-4xl font-bold">Praxis LP</h1>

        <div className="mt-10 flex justify-center">
          <Button>Click me</Button>
        </div>
      </main>
    </div>
  );
}
