export default function Project2() {
  return (
    <div className="space-y-6">
      {/* Overzicht */}
      <section>
        <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Overzicht
        </h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Dit is een enterprise fleet management systeem gebouwd met Laravel en
          Livewire, specifiek ontwikkeld voor een Belgisch bouwbedrijf. Het
          systeem beheert een complete wagenpark-operatie inclusief voertuigen,
          bestuurders, leasing, schades, brandstof, en elektrisch laden.
        </p>
      </section>

      {/* Technische details */}
      <section>
        <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Technische details
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Framework: </strong>Laravel
          </li>
          <li>
            <strong>Frontend: </strong>Livewire, Tailwind CSS, Alpine.js
          </li>
          <li>
            <strong>Database: </strong>MySQL
          </li>
          <li>
            <strong>Charts: </strong>ApexCharts
          </li>
          <li>
            <strong>Tables: </strong>Filament Tables
          </li>
          <li>
            <strong>Forms: </strong>Filament Forms
          </li>
        </ul>
      </section>

      {/* Kernfunctionaliteiten */}
      <section>
        <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Kernfunctionaliteiten
        </h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* 1. Voertuigbeheer */}
          <div className="rounded-lg bg-gray-50 p-5 dark:bg-gray-800">
            <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Voertuigbeheer (Car)
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>Complete CRUD voor voertuigen (auto&apos;s, fietsen)</li>
              <li>
                Tracking van: kenteken, merk, model, brandstof, CO2, fiscale
                waarden
              </li>
              <li>
                Contract management: leasing, begin/einddatum, maandelijkse
                kosten
              </li>
              <li>
                Technische specs: vermogen, verbruik, batterijcapaciteit,
                WLTP/NEDC waarden
              </li>
            </ul>
          </div>

          {/* 2. Bestuurderbeheer */}
          <div className="rounded-lg bg-gray-50 p-5 dark:bg-gray-800">
            <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Bestuurderbeheer (Driver)
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>Persoonlijke gegevens en contactinformatie</li>
              <li>Koppeling aan bedrijven en afdelingen</li>
              <li>Contract periodes en mobiliteitsopties</li>
              <li>Rijbewijs tracking</li>
            </ul>
          </div>

          {/* 3. Schadeafhandeling */}
          <div className="rounded-lg bg-gray-50 p-5 dark:bg-gray-800">
            <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Schadeafhandeling (Damage)
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>Registratie van schades met datum, locatie, type</li>
              <li>Aansprakelijkheid tracking</li>
              <li>
                Financiële gegevens: schadelast, recuperatie, vrijstelling
              </li>
              <li>Status management en herstel tracking</li>
            </ul>
          </div>

          {/* 4. Energie & Brandstofbeheer */}
          <div className="rounded-lg bg-gray-50 p-5 dark:bg-gray-800">
            <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Energie & Brandstofbeheer
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                Brandstof: tracking van tankbeurten, locaties, kosten (Fuel)
              </li>
              <li>Elektrisch laden: laadsessies, kaarten, locaties (Energy)</li>
              <li>Laadpalen: beheer van charging points voor bedrijven</li>
            </ul>
          </div>

          {/* 5. Financieel Beheer */}
          <div className="rounded-lg bg-gray-50 p-5 dark:bg-gray-800">
            <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Financieel Beheer
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>Leasing maatschappijen (Leasing)</li>
              <li>Maandelijkse kostprijzen en TCO (Total Cost of Ownership)</li>
              <li>Voordeel Alle Aard (VAA) berekeningen</li>
              <li>Parking abonnementen</li>
              <li>Openbaar vervoer abonnementen</li>
            </ul>
          </div>

          {/* 6. Integraties */}
          <div className="rounded-lg bg-gray-50 p-5 dark:bg-gray-800">
            <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Integraties
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>Stripe API: usage records en billing</li>
              <li>eFlux: laadpaal netwerk integratie</li>
              <li>Prodongle: vehicle tracking</li>
              <li>Excel import/export functionaliteit</li>
            </ul>
          </div>

          {/* 7. Rapportage & Analytics */}
          <div className="rounded-lg bg-gray-50 p-5 dark:bg-gray-800">
            <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Rapportage & Analytics
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>Dashboard met KPI's en grafieken</li>
              <li>TCO analyse per voertuig/bestuurder</li>
              <li>CO2 rapportage</li>
              <li>Brandstof consumptie tracking</li>
              <li>Custom reports met filters</li>
            </ul>
          </div>

          {/* 8. Multi-tenant Architectuur */}
          <div className="rounded-lg bg-gray-50 p-5 dark:bg-gray-800">
            <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Multi-tenant Architectuur
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>Bedrijfsbeheer met afdelingen</li>
              <li>Role-based access control</li>
              <li>Gefilterde data per organisatie</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technische Highlights */}
      <section>
        <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Technische Highlights
        </h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Data Layer */}
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-5 dark:border-blue-800 dark:bg-blue-900/20">
            <h4 className="mb-2 text-lg font-semibold text-blue-900 dark:text-blue-100">
              Data Layer
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>Spatie Laravel Data: type-safe DTOs (Tags)</li>
              <li>Eloquent Models met scopes en accessors</li>
              <li>Model Revisioning voor audit trails</li>
            </ul>
          </div>

          {/* API Integraties */}
          <div className="rounded-lg border border-green-200 bg-green-50 p-5 dark:border-green-800 dark:bg-green-900/20">
            <h4 className="mb-2 text-lg font-semibold text-green-900 dark:text-green-100">
              API Integraties
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>REST API endpoints (Resources)</li>
              <li>Externe diensten: Stripe, eFlux, Fleet Complete</li>
              <li>Webhook afhandeling</li>
            </ul>
          </div>

          {/* Import/Export */}
          <div className="rounded-lg border border-purple-200 bg-purple-50 p-5 dark:border-purple-800 dark:bg-purple-900/20">
            <h4 className="mb-2 text-lg font-semibold text-purple-900 dark:text-purple-100">
              Import/Export
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>Bulkimport via Excel (Imports)</li>
              <li>Custom mapping voor verschillende data formaten</li>
              <li>Validatie en error handling</li>
            </ul>
          </div>

          {/* UI/UX */}
          <div className="rounded-lg border border-orange-200 bg-orange-50 p-5 dark:border-orange-800 dark:bg-orange-900/20">
            <h4 className="mb-2 text-lg font-semibold text-orange-900 dark:text-orange-100">
              UI/UX
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>Responsive design met Tailwind CSS</li>
              <li>Real-time updates via Livewire</li>
              <li>Dark mode support</li>
              <li>Custom components library</li>
            </ul>
          </div>

          {/* Queue & Jobs */}
          <div className="rounded-lg border border-red-200 bg-red-50 p-5 dark:border-red-800 dark:bg-red-900/20">
            <h4 className="mb-2 text-lg font-semibold text-red-900 dark:text-red-100">
              Queue & Jobs
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>Achtergrond verwerking voor contracteindes</li>
              <li>Preventieve notificaties</li>
              <li>Email verzending</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business Logic */}
      <section>
        <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Business Logic
        </h3>
        <p className="mb-3 text-gray-700 dark:text-gray-300">
          Het systeem handelt complexe business rules af zoals:
        </p>
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <li className="flex items-start space-x-2">
            <span className="mt-1 text-green-500">✓</span>
            <span className="text-gray-700 dark:text-gray-300">
              Fiscale aftrekbaarheid berekeningen (Belgische wetgeving)
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="mt-1 text-green-500">✓</span>
            <span className="text-gray-700 dark:text-gray-300">
              Contract verlengingen en waarschuwingen
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="mt-1 text-green-500">✓</span>
            <span className="text-gray-700 dark:text-gray-300">
              Schade reserves en recuperaties
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="mt-1 text-green-500">✓</span>
            <span className="text-gray-700 dark:text-gray-300">
              Multi-currency support (EUR focus)
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
