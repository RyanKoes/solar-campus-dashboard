type RawSolarResponse = {
  data: {
    data: [number, number | null][];
  }[];
};

export type SolarDataPoint = {
  timestamp: string;
  power_kw: number;
};

export async function fetchSolarData(): Promise<SolarDataPoint[]> {
  const date = new Date().toISOString().slice(0, 10);

  const body = {
    type: 0,
    parameters: [
      { name: "Context", type: 3, value: "site" },
      { name: "Source", type: 1, value: "62556" },
      { name: "Start", type: 7, value: date },
      { name: "End", type: 7, value: date },
    ],
    props: null,
    series: [],
    id: 15,
    pollInterval: 5,
  };

  const res = await fetch(
    "https://hmi.alsoenergy.com/api/view/sourcedata/C18794?lastChanged=1900-01-01T00:00:00.000Z",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        referer:
          "https://hmi.alsoenergy.com/powerhmi/publicdisplay/db163635-8d51-4692-bc73-c53b732c16e4/main",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("AlsoEnergy request failed");
  }

  const json = (await res.json()) as RawSolarResponse;

  const rawPoints = json.data[0].data;

  return rawPoints
    .filter((point): point is [number, number] => point[1] !== null)
    .map(([timestamp, power]) => ({
      timestamp: new Date(timestamp).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      power_kw: Number(power.toFixed(2)),
    }));
}
