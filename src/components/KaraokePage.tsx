import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CirclePile, RectangleEllipsis, Pizza, MapPin, Calendar, Clock } from "lucide-react";


const prizes = [
  {
    icon: CirclePile,
    name: "Bilard",
    description: "Voucher na Billard w MK Bowling na dowolne usługi",
  },
  {
    icon: RectangleEllipsis,
    name: "Shuffleboard",
    description: "Voucher na Shuffleboard lub bilard w MK Bowling",
  },
  {
    icon: Pizza ,
    name: "Pizza",
    description: "Voucher na pyszną pizzę w MK Bowling",
  },
];

type KaraokePageProps = {
  city: string
}

export const KaraokePage = ({city}: KaraokePageProps) => {
  return (
    <div className="flex h-dvh w-full flex-col bg-linear-to-br from-red-700 via-red-600 to-rose-500 text-white">
      <header className="flex shrink-0 items-center justify-between px-4 pt-4 md:px-8 md:pt-6 animate-fade-in-up">
        <img
          src="/mk-logo.webp"
          alt="MK Bowling"
          className="h-10 w-auto md:h-14"
        />
        <div className="flex items-center gap-2 text-xs text-white/80 md:text-sm">
          <MapPin className="size-3.5 md:size-4" />
          <span>MK Bowling, {city}</span>
        </div>
      </header>

      <main className="flex min-h-0 flex-1 flex-col items-center justify-center px-4 py-4 md:px-8 md:py-6">
        <div className="mb-4 text-center md:mb-6 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
          <h1 className="text-3xl font-bold tracking-tight drop-shadow-lg md:text-5xl">
            Karaoke w MK Bowling
          </h1>
          <p className="mt-2 text-base font-medium text-white/90 md:mt-3 md:text-xl">
            Śpiewaj i wygrywaj nagrody
          </p>
        </div>

        <div className="mb-4 flex items-center gap-4 text-xs text-white/80 md:mb-6 md:gap-6 md:text-sm animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <span className="flex items-center gap-1.5">
            <Calendar className="size-3.5 md:size-4" />
            Każdy piątek
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5 md:size-4" />
            Start: 18:00
          </span>
        </div>

        <div className="flex w-full max-w-4xl flex-col gap-3 md:flex-row md:gap-4">
          {prizes.map(({name,icon: Icon,description}, index) => (
            <Card
              key={name}
              className="relative flex gap-0 mx-auto max-w-md w-full border-0 bg-white/10 text-white ring-white/20 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${450 + index * 150}ms` }}
            >
                  <Icon className="absolute top-1 right-1 size-10 text-red-400 md:size-12" />
              <CardHeader className="pb-0">
                <CardTitle className="text-lg font-bold md:text-2xl">
                  {name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-red-300 md:text-sm">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="shrink-0 border-t border-white/10 bg-black/20 px-4 py-3 md:px-8 md:py-4 animate-fade-in-up" style={{ animationDelay: "1050ms" }}>
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-1 text-center text-xs text-white/60 md:flex-row md:text-sm">
          <span>MK Bowling &mdash; Rozrywka, kręgle, bilard i karaoke</span>
          <span>&copy; {new Date().getFullYear()} MK Bowling. Wszelkie prawa zastrzeżone.</span>
        </div>
      </footer>
    </div>
  );
}
