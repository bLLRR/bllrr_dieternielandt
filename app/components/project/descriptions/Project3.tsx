export default function Project3() {
  return (
    <div className="space-y-6">
      {/* Overzicht */}
      <section>
        <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Overzicht
        </h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Een full-stack ERP (Enterprise Resource Planning) systeem gebouwd met
          moderne webtechnologieën. Het platform biedt uitgebreide
          functionaliteit voor projectmanagement, voorraad-, facturatie- en
          klantenbeheer voor B2B organisaties.
        </p>
      </section>

      {/* Technische Stack */}
      <section>
        <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Technische details
        </h3>

        <div className="grid grid-cols-1 space-y-4 md:grid-cols-2 md:gap-4">
          {/* Frontend */}
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-5 dark:border-blue-800 dark:bg-blue-900/20">
            <h4 className="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100">
              Frontend
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>React met React Router voor navigatie</li>
              <li>
                Redux Toolkit (RTK Query) voor state management en API calls
              </li>
              <li>Tailwind CSS voor styling</li>
              <li>React Hook Form met validatie</li>
              <li>Internationalisatie (i18n) met meerdere taalondersteuning</li>
              <li>Font Awesome voor iconografie</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="rounded-lg border border-green-200 bg-green-50 p-5 dark:border-green-800 dark:bg-green-900/20">
            <h4 className="mb-3 text-xl font-semibold text-green-900 dark:text-green-100">
              Backend
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>Node.js met Express.js</li>
              <li>PostgreSQL database met Sequelize ORM</li>
              <li>Umzug voor database migraties en seeding</li>
              <li>
                <strong>Azure Services integratie:</strong>
                <ul className="mt-1 ml-6 list-inside list-disc space-y-1">
                  <li>Azure Blob Storage voor bestandsopslag</li>
                  <li>Azure Key Vault voor geheimen beheer</li>
                  <li>Azure Communication Services voor e-mail</li>
                </ul>
              </li>
              <li>
                Stripe integratie voor betalingsverwerking en abonnementen
              </li>
            </ul>
          </div>

          {/* Infrastructure & DevOps */}
          <div className="rounded-lg border border-purple-200 bg-purple-50 p-5 dark:border-purple-800 dark:bg-purple-900/20">
            <h4 className="mb-3 text-xl font-semibold text-purple-900 dark:text-purple-100">
              Infrastructure & DevOps
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>Docker containerisatie</li>
              <li>GitHub Actions CI/CD pipelines</li>
              <li>Azure Container Apps voor deployment</li>
              <li>Playwright voor end-to-end testing</li>
              <li>Sentry voor error tracking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Kernfunctionaliteiten */}
      <section>
        <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Kernfunctionaliteiten
        </h3>

        <div className="grid grid-cols-1 gap-4 space-y-6 md:grid-cols-2">
          {/* 1. Projectmanagement */}
          <div className="rounded-lg bg-gray-50 p-5 dark:bg-gray-800">
            <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
              1. Projectmanagement
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>Projecten met mijlpalen (milestones) en taken</li>
              <li>Planning met visuele timeline en resource toewijzing</li>
              <li>Facturatietypen: fixed price, time & materials</li>
              <li>Budget tracking en voortgangsbewaking</li>
              <li>Documenten en bestandsbeheer per project</li>
            </ul>
          </div>

          {/* 2. Klantenbeheer (CRM) */}
          <div className="rounded-lg bg-gray-50 p-5 dark:bg-gray-800">
            <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
              2. Klantenbeheer (CRM)
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>Bedrijven en contactpersonen beheer</li>
              <li>Verkoopkansen (opportunities) met quotes</li>
              <li>Activiteitenregistratie en tijdlijn</li>
              <li>
                Integraties met externe bedrijfsinformatie (Trendstop,
                Companyweb)
              </li>
            </ul>
          </div>

          {/* 3. Voorraad & Inkoop */}
          <div className="rounded-lg bg-gray-50 p-5 dark:bg-gray-800">
            <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
              3. Voorraad & Inkoop
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>Producten en diensten catalogus</li>
              <li>Voorraad mutaties en locaties</li>
              <li>Inkooporders met leveranciersbeheer</li>
              <li>Magazijnorders en retourzendingen</li>
              <li>Product integraties (Cebeo, Rexel)</li>
            </ul>
          </div>

          {/* 4. Facturatie */}
          <div className="rounded-lg bg-gray-50 p-5 dark:bg-gray-800">
            <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
              4. Facturatie
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>Offerten en orderbevestigingen</li>
              <li>Facturen genereren en verzenden</li>
              <li>PDF layouts configureerbaar per organisatie</li>
              <li>Betalingsstatus tracking</li>
            </ul>
          </div>

          {/* 5. Multi-tenancy & Beveiliging */}
          <div className="rounded-lg bg-gray-50 p-5 dark:bg-gray-800">
            <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
              5. Multi-tenancy & Beveiliging
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>Organisatie-gebaseerde data isolatie</li>
              <li>Rol-gebaseerde toegangscontrole (RBAC)</li>
              <li>Microsoft Azure AD authenticatie</li>
              <li>Two-factor authenticatie (2FA) optie</li>
              <li>Session management met PostgreSQL opslag</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Microservices Architectuur */}
      <section>
        <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Microservices Architectuur
        </h3>
        <p className="mb-3 text-gray-700 dark:text-gray-300">
          Het systeem bestaat uit meerdere services:
        </p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h5 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
              Main ERP
            </h5>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Core applicatie
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h5 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
              Company Mapper
            </h5>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Externe bedrijfsinformatie aggregatie
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h5 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
              Product Mapper
            </h5>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Product data van leveranciers
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h5 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
              Puppeteer Service
            </h5>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              PDF generatie en web scraping
            </p>
          </div>
        </div>
        <p className="mt-3 text-gray-700 italic dark:text-gray-300">
          Communicatie via REST APIs met shared token authenticatie.
        </p>
      </section>

      {/* Performance & Schaling */}
      <section>
        <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Performance & Schaling
        </h3>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h5 className="mb-1 font-semibold text-blue-900 dark:text-blue-100">
              Pagination
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Server-side pagination voor grote datasets
            </p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h5 className="mb-1 font-semibold text-blue-900 dark:text-blue-100">
              Caching
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              RTK Query caching strategie
            </p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h5 className="mb-1 font-semibold text-blue-900 dark:text-blue-100">
              Lazy loading
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              React code splitting
            </p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h5 className="mb-1 font-semibold text-blue-900 dark:text-blue-100">
              Database indexing
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Geoptimaliseerde queries
            </p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h5 className="mb-1 font-semibold text-blue-900 dark:text-blue-100">
              Azure CDN
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Static assets delivery
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
