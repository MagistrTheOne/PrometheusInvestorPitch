"use client";
import { useState } from "react";
import { Slide } from "@/components/slide";
import { KpiGrid } from "@/components/kpi-grid";
import { ModelCard } from "@/components/model-card";
import { useSlideNav, SlideProgress } from "@/components/slide-nav";
import { Footer } from "@/components/footer";
import { kpis, models, roadmap, platformFeatures, securityFeatures, investmentScenarios } from "@/lib/data";

export default function Page() {
  useSlideNav();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-white">
              Прометей AGI
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/platform" className="text-white hover:text-muted-foreground transition-colors">
                Платформа
              </a>
              <a href="/models" className="text-white hover:text-muted-foreground transition-colors">
                Модели
              </a>
              <a href="/cases" className="text-white hover:text-muted-foreground transition-colors">
                Кейсы
              </a>
              <a href="#roi" className="text-white hover:text-muted-foreground transition-colors">
                ROI Calculator
              </a>
              <a href="/docs" className="text-white hover:text-muted-foreground transition-colors">
                Документы
              </a>
              <a href="/contact" className="text-white hover:text-muted-foreground transition-colors">
                Контакты
              </a>
            </div>

            {/* Mobile Burger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-muted-foreground transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <a 
                  href="/platform" 
                  className="text-white hover:text-muted-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Платформа
                </a>
                <a 
                  href="/models" 
                  className="text-white hover:text-muted-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Модели
                </a>
                <a 
                  href="/cases" 
                  className="text-white hover:text-muted-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Кейсы
                </a>
                <a 
                  href="#roi" 
                  className="text-white hover:text-muted-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ROI Calculator
                </a>
                <a 
                  href="/docs" 
                  className="text-white hover:text-muted-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Документы
                </a>
                <a 
                  href="/contact" 
                  className="text-white hover:text-muted-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Контакты
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div data-slide>
        <Slide title="Прометей AGI — отечественная платформа ИОИ" kicker="Hero">
          <p className="text-2xl md:text-3xl font-light leading-relaxed">
            Три специализированные модели. Единая платформа. Промышленная готовность для госсектора и корпораций.
          </p>
          <div className="mt-8 flex justify-center">
            <a 
              href="https://t.me/MagistrTheOne"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-8 py-4 rounded-full font-medium hover:bg-card/60 transition-all duration-300 hover:scale-105 inline-block text-white"
            >
              Получить демо
            </a>
          </div>
        </Slide>
      </div>

      <div data-slide>
        <Slide title="Ключевые метрики" kicker="KPI">
          <KpiGrid items={kpis} />
        </Slide>
      </div>

      <div data-slide>
        <Slide title="Линейка моделей" kicker="Models">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {models.map((m, i) => (
              <ModelCard key={i} {...m} />
            ))}
          </div>
        </Slide>
      </div>

      <div data-slide>
        <Slide title="Платформа" kicker="Архитектура">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platformFeatures.map((feature, i) => (
              <div key={i} className="glass p-6 rounded-lg text-center">
                <div className="text-lg font-medium text-white leading-relaxed">
                  {feature}
                </div>
              </div>
            ))}
          </div>
        </Slide>
      </div>

      <div data-slide>
        <Slide title="Безопасность и комплаенс" kicker="ФЗ‑152 / ГОСТ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityFeatures.map((feature, i) => (
              <div key={i} className="glass p-6 rounded-lg text-center">
                <div className="text-lg font-medium text-white leading-relaxed">
                  {feature}
                </div>
              </div>
            ))}
          </div>
        </Slide>
      </div>

      <div data-slide id="roi">
        <Slide title="Инвестиционные сценарии" kicker="ROI Calculator">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {investmentScenarios.map((scenario, i) => (
              <div key={i} className="glass p-6 rounded-lg text-center hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-white mb-2">{scenario.title}</div>
                <div className="text-sm text-muted-foreground mb-4">{scenario.description}</div>
                
                <div className="space-y-3 mb-6">
                  {scenario.features.map((feature, j) => (
                    <div key={j} className="text-sm text-white">• {feature}</div>
                  ))}
                </div>
                
                <div className="border-t border-border/50 pt-4">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-muted-foreground">Модели:</div>
                    <div className="text-white font-medium">{scenario.metrics.models}</div>
                    <div className="text-muted-foreground">Клиенты:</div>
                    <div className="text-white font-medium">{scenario.metrics.clients}</div>
                    <div className="text-muted-foreground">Срок:</div>
                    <div className="text-white font-medium">{scenario.metrics.timeline}</div>
                    <div className="text-muted-foreground">Выручка:</div>
                    <div className="text-white font-medium">{scenario.metrics.revenue}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Slide>
      </div>

      <div data-slide>
        <Slide title="Дорожная карта" kicker="Roadmap">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmap.map((r, i) => (
              <div key={i} className="glass p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-white mb-2">{r.q}</div>
                <div className="text-lg text-muted-foreground">{r.item}</div>
              </div>
            ))}
          </div>
        </Slide>
      </div>

      <div data-slide>
        <Slide title="Доступ к демо / NDA" kicker="Контакт">
          <p>Запросите закрытую презентацию. Отправим материалы и организуем демонстрацию на защищённой площадке.</p>
        </Slide>
      </div>

      <SlideProgress />
      <Footer />
    </main>
  );
}
