export default function Project4() {
  return (
    <div className="space-y-6">
      {/* Overzicht */}
      <section>
        <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Overzicht
        </h3>
        <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
          Een modulair Node.js/Express microservices platform dat als
          integration hub fungeert tussen verschillende externe ERP en business
          intelligence systemen. Het project bestaat uit twee hoofdcomponenten
          die externe bedrijfsinformatie en productdata normaliseren en
          centraliseren.
        </p>
      </section>

      {/* Componenten */}
      <section>
        <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Hoofdcomponenten
        </h3>

        <div className="grid grid-cols-1 gap-4 space-y-4 md:grid-cols-2">
          {/* Company Mapper Service */}
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-5 dark:border-blue-800 dark:bg-blue-900/20">
            <h4 className="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100">
              1. Company Mapper Service
            </h4>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              Integreert met externe bedrijfsinformatie providers zoals:
            </p>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                <strong>CompanyWeb</strong> - Belgische bedrijfsinformatie en
                financiële data
              </li>
              <li>
                <strong>Trends Top</strong> - Business intelligence en company
                profiling
              </li>
            </ul>
          </div>

          {/* Product Mapper Service */}
          <div className="rounded-lg border border-green-200 bg-green-50 p-5 dark:border-green-800 dark:bg-green-900/20">
            <h4 className="mb-3 text-xl font-semibold text-green-900 dark:text-green-100">
              2. Product Mapper Service
            </h4>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              Integreert met product distributeurs zoals:
            </p>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Cebeo</strong> - Elektrische materialen en diensten
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technische Architectuur */}
      <section>
        <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Technische Architectuur
        </h3>

        <div className="space-y-4">
          {/* Core Technologies */}
          <div className="rounded-lg border border-purple-200 bg-purple-50 p-5 dark:border-purple-800 dark:bg-purple-900/20">
            <h4 className="mb-3 text-xl font-semibold text-purple-900 dark:text-purple-100">
              Technologieën
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Runtime:</strong> Node.js 20.x met ES Modules
              </li>
              <li>
                <strong>Framework:</strong> Express.js
              </li>
              <li>
                <strong>Authenticatie:</strong> Passport.js met custom hash
                strategy
              </li>
              <li>
                <strong>Security:</strong>
                <ul className="mt-1 ml-6 list-inside list-disc space-y-1">
                  <li>Azure Key Vault voor credential management</li>
                  <li>Token-based authentication met HMAC SHA-256</li>
                  <li>Rate limiting (5000 requests/15min)</li>
                </ul>
              </li>
              <li>
                <strong>Validatie:</strong> Joi schemas
              </li>
              <li>
                <strong>Infrastructuur:</strong> Docker container
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section>
        <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Belangrijkste Features
        </h3>

        <div className="grid grid-cols-1 space-y-4 md:grid-cols-2 md:gap-4">
          {/* Integratiebeheer */}
          <div className="rounded-lg border border-orange-200 bg-orange-50 p-5 dark:border-orange-800 dark:bg-orange-900/20">
            <h4 className="mb-3 flex items-center text-lg font-semibold text-orange-900 dark:text-orange-100">
              <span className="mr-2">🔌</span> Integratiebeheer
            </h4>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>Dynamische integratie type via JSON configuratie</li>
              <li>Multi-tenant support via organizationId</li>
              <li>Integration authentication flow</li>
            </ul>
          </div>

          {/* Data Normalization */}
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-5 dark:border-blue-800 dark:bg-blue-900/20">
            <h4 className="mb-3 flex items-center text-lg font-semibold text-blue-900 dark:text-blue-100">
              <span className="mr-2">📊</span> Data Normalisatie
            </h4>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              Uniforme DTOs voor:
            </p>
            <ul className="ml-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Bedrijfsgegevens:</strong> BTW, adres, contactinfo,
                financiële gegevens, bestuurders
              </li>
              <li>
                <strong>Productgegevens:</strong> Naam, beschrijving, barcode,
                leveranciersinformatie
              </li>
              <li>
                <strong>Balansgegevens:</strong> Financiële jaarcijfers
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* API Design */}
      <section>
        <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
          API Design
        </h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Company Endpoints */}
          <div className="rounded-lg bg-gray-50 p-5 dark:bg-gray-800">
            <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Company Endpoints
            </h4>
            <pre className="rounded bg-gray-900 p-3 text-xs text-gray-100">
              {`POST /company
POST /company/:id
POST /integration/authenticate`}
            </pre>
          </div>

          {/* Product Endpoints */}
          <div className="rounded-lg bg-gray-50 p-5 dark:bg-gray-800">
            <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Product Endpoints
            </h4>
            <pre className="rounded bg-gray-900 p-3 text-xs text-gray-100">
              {`POST /product`}
            </pre>
          </div>

          {/* Integratiebeheer */}
          <div className="rounded-lg bg-gray-50 p-5 dark:bg-gray-800">
            <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Integratiebeheer
            </h4>
            <pre className="rounded bg-gray-900 p-3 text-xs text-gray-100">
              {`GET  /integration-type
POST /integration/authenticate`}
            </pre>
          </div>
        </div>
      </section>

      {/* Toepassingen */}
      <section>
        <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Toepassingen
        </h3>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {[
            {
              icon: '',
              title: 'B2B Verkoopplatformen',
              desc: 'Bedrijfsverificatie en kredietcontroles',
            },
            {
              icon: '',
              title: 'ERP Systemen',
              desc: 'Product catalogus synchronisatie',
            },
            {
              icon: '',
              title: 'CRM Integratie',
              desc: 'Geautomatiseerde bedrijfsinformatie verrijking',
            },
            {
              icon: '',
              title: 'Financiële Diensten',
              desc: 'Due diligence en risicobeoordeling',
            },
          ].map((useCase, index) => (
            <div
              key={index}
              className="rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 p-4 dark:border-blue-800 dark:from-blue-900/20 dark:to-purple-900/20"
            >
              <div className="flex items-start space-x-3">
                <span className="text-2xl">{useCase.icon}</span>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-gray-100">
                    {useCase.title}
                  </h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {useCase.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
