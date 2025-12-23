import SolarPowerChart from "@/components/SolarPowerChart";
import { fetchSolarData } from "@/lib/fetchSolarData";

const mockData = [
  { timestamp: "00:00", power_kw: 0 },
  { timestamp: "01:00", power_kw: 0 },
  { timestamp: "02:00", power_kw: 0 },
  { timestamp: "03:00", power_kw: 0 },
  { timestamp: "04:00", power_kw: 0 },
  { timestamp: "05:00", power_kw: 0 },
  { timestamp: "06:00", power_kw: 15 },
  { timestamp: "07:00", power_kw: 80 },
  { timestamp: "08:00", power_kw: 220 },
  { timestamp: "09:00", power_kw: 420 },
  { timestamp: "10:00", power_kw: 650 },
  { timestamp: "11:00", power_kw: 820 },
  { timestamp: "12:00", power_kw: 940 },
  { timestamp: "13:00", power_kw: 920 },
  { timestamp: "14:00", power_kw: 850 },
  { timestamp: "15:00", power_kw: 680 },
  { timestamp: "16:00", power_kw: 480 },
  { timestamp: "17:00", power_kw: 260 },
  { timestamp: "18:00", power_kw: 90 },
  { timestamp: "19:00", power_kw: 10 },
  { timestamp: "20:00", power_kw: 0 },
  { timestamp: "21:00", power_kw: 0 },
  { timestamp: "22:00", power_kw: 0 },
  { timestamp: "23:00", power_kw: 0 },
];

export default async function Home() {
  const solarData = await fetchSolarData();
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with title and nav */}
      <header className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Title on the left */}
            <div className="flex-shrink-0">
              <h1 className="text-4xl font-bold text-black">
                Solar Campus Dashboard
              </h1>
            </div>
            
            {/* Nav bar on the right */}
            <nav className="flex space-x-8">
              <a
                href="#"
                className="text-black hover:text-zinc-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-black hover:text-zinc-600 transition-colors"
              >
                Solar
              </a>
              <a
                href="#"
                className="text-black hover:text-zinc-600 transition-colors"
              >
                Consumption
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Graph container */}
          <div className="bg-zinc-200 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Solar Power Production (Today)</h2>
            <SolarPowerChart data={solarData} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-zinc-300 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <p className="text-black text-sm">
              © 2025 Solar Campus Dashboard. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-black hover:text-zinc-600 text-sm transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-black hover:text-zinc-600 text-sm transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

