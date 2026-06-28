import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Send, FileEdit, GraduationCap, BarChart3, FileText, Wallet, Lock,
  ListChecks, SlidersHorizontal, CircleCheck, HelpCircle, ShieldCheck, Star, ChevronDown,
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import kabinet1 from "@/assets/kabinet1.png.asset.json";
import kabinet2 from "@/assets/kabinet2.png.asset.json";
import stat1 from "@/assets/stat1.jpg.asset.json";
import stat2 from "@/assets/stat2.png.asset.json";
import stat3 from "@/assets/stat3.png.asset.json";
import stat4 from "@/assets/stat4.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Дистанционная работа в проектах Яндекса" },
      { name: "description", content: "Информационная страница для аккредитованных специалистов программы Яндекс.Дистрибуция." },
    ],
  }),
  component: Index,
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div data-reveal className="reveal text-center text-[11px] tracking-[0.25em] font-semibold text-[oklch(0.62_0.24_28)] mb-4">
      — {children} —
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div data-reveal className={`reveal rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-4 sm:p-5 md:p-7 shadow-[0_1px_2px_rgba(16,24,40,0.04)] ${className}`}>
      {children}
    </div>
  );
}

function YellowIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-11 h-11 rounded-full bg-yellow flex items-center justify-center text-[oklch(0.25_0.05_60)] shrink-0">
      {children}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Card>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex gap-4 items-start text-left cursor-pointer"
      >
        <YellowIcon><HelpCircle className="w-5 h-5" /></YellowIcon>
        <div className="pt-2 flex-1">
          <h3 className="font-bold pr-8">{q}</h3>
        </div>
        <ChevronDown
          className={`w-5 h-5 mt-3 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="text-muted-foreground leading-relaxed pl-[3.25rem]">{a}</p>
        </div>
      </div>
    </Card>
  );
}


function useScrollReveal() {
  React.useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => el.classList.add("reveal-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Hero entrance animation on mount (mobile-friendly stagger)
  React.useEffect(() => {
    const heroEls = document.querySelectorAll<HTMLElement>("[data-hero-reveal]");
    heroEls.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      el.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
      requestAnimationFrame(() => {
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, 200 + i * 350);
      });
    });
  }, []);
}


function Index() {
  useScrollReveal();
  return (
    <div className="min-h-screen">
      <main className="max-w-5xl mx-auto px-4 sm:px-5 md:px-8 py-8 sm:py-10 md:py-24 space-y-10 sm:space-y-14 md:space-y-24">
        {/* HERO */}
        <section className="text-center">
          <div data-hero-reveal className="inline-flex flex-wrap justify-center items-center gap-2 border border-border rounded-full px-3 py-1.5 bg-card/70 text-xs sm:text-sm mb-6 md:mb-10">
            <span className="w-5 h-5 rounded-full bg-red text-white flex items-center justify-center text-xs font-bold shrink-0">Я</span>
            <span className="text-center">Официальный партнёр Яндекс Дистрибуции</span>
          </div>
          <h1 data-hero-reveal className="text-[1.75rem] sm:text-[2rem] md:text-5xl lg:text-7xl leading-[1.1] sm:leading-[1.08] font-extrabold tracking-tight">
            Дистанционная работа<br />
            <span className="text-red">в проектах Яндекса</span>
          </h1>
          <p data-hero-reveal className="max-w-2xl mx-auto mt-5 md:mt-8 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            Информационная страница для аккредитованных специалистов. Ознакомьтесь с регламентом задач,
            чтобы изучить этапы работы и посмотреть реальные отчёты сотрудников нашей команды.
          </p>
          <div data-hero-reveal className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6 md:mt-8">
            {[
              { icon: <FileEdit className="w-4 h-4 text-red" />, label: "Прямой договор с Яндексом" },
              { icon: <GraduationCap className="w-4 h-4 text-red" />, label: "Обучение с нуля" },
              { icon: <Send className="w-4 h-4 text-red" />, label: "Свободный график от 3 часов" },
            ].map((b) => (
              <div key={b.label} className="inline-flex items-center gap-2 border border-border rounded-full px-3 py-1.5 md:px-4 md:py-2 bg-card/70 text-xs sm:text-sm">
                {b.icon}{b.label}
              </div>
            ))}
          </div>
        </section>


        {/* О ПОЗИЦИИ */}
        <section>
          <SectionLabel>о позиции</SectionLabel>
          <h2 data-reveal className="reveal text-3xl sm:text-4xl md:text-5xl font-extrabold text-center tracking-tight mb-6 md:mb-10">
            Обязанности специалиста и формат работы
          </h2>
          <div className="space-y-4">
            <Card>
              <p className="text-muted-foreground leading-relaxed">
                Яндекс.Дистрибуция — это масштабное ИТ-направление по продвижению продуктов Яндекса.
                Работа специалиста строится на продвижении востребованных товаров маркетплейса Яндекс Маркета.
                Наша команда занимается оптимизацией и размещением партнёрского трафика по готовым алгоритмам.
              </p>
            </Card>
            <Card>
              <YellowIcon><ListChecks className="w-5 h-5" /></YellowIcon>
              <h3 className="font-bold text-lg mt-5">Ваши задачи</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Пройти базовое обучение, зарегистрироваться в системе и самостоятельно размещать
                информационные объявления на платформе Авито и других доступных площадках. Вы привлекаете
                целевой трафик на товары по готовым алгоритмам и полностью управляете своим рабочим временем.
              </p>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Яндекс выплачивает комиссию до 60% за каждый оплаченный заказ.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2"><CircleCheck className="w-4 h-4 text-red" />Работа по готовым инструкциям</li>
                <li className="flex items-center gap-2"><CircleCheck className="w-4 h-4 text-red" />Прозрачная аналитика</li>
              </ul>
            </Card>
            <Card>
              <YellowIcon><SlidersHorizontal className="w-5 h-5" /></YellowIcon>
              <h3 className="font-bold text-lg mt-5">Требования</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Наличие смартфона или ПК с интернетом, базовая грамотность и готовность уделять задачам от 3–4 часов в день.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2"><CircleCheck className="w-4 h-4 text-red" />Опыт работы не требуется</li>
                <li className="flex items-center gap-2"><CircleCheck className="w-4 h-4 text-red" />Подходит студентам и в декрете</li>
                <li className="flex items-center gap-2"><CircleCheck className="w-4 h-4 text-red" />Гибкий график</li>
              </ul>
            </Card>
            <Card>
              <div className="flex items-center gap-2 text-[11px] tracking-[0.25em] font-semibold text-red">
                <CircleCheck className="w-4 h-4" /> ДОХОД
              </div>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Доход полностью сдельный и зависит от выполненных задач (KPI). Все результаты фиксируются в
                вашей рабочей панели в реальном времени.
              </p>
              <p className="mt-4 text-2xl md:text-3xl font-extrabold text-red">
                от 50 000 до 350 000 ₽ <span className="text-muted-foreground text-base font-normal">/ месяц</span>
              </p>
            </Card>
          </div>
        </section>

        {/* ПРЕИМУЩЕСТВА */}
        <section>
          <SectionLabel>преимущества</SectionLabel>
          <h2 data-reveal className="reveal text-3xl sm:text-4xl md:text-5xl font-extrabold text-center tracking-tight mb-6 md:mb-10">
            Преимущества работы с нами
          </h2>
          <div className="space-y-4">
            {[
              { i: <FileText className="w-5 h-5" />, t: "Свой график", d: "Задачи от 3-4 часов в день. Вы сами выбираете время работы и можете самостоятельно распределять нагрузку." },
              { i: <Wallet className="w-5 h-5" />, t: "Стабильность", d: "Официальный расчёт за выполненный объем задач (KPI) происходит строго без задержек." },
              { i: <Lock className="w-5 h-5" />, t: "База знаний", d: "Доступ к подробным пошаговым регламентам. Вы видите каждую выполненную задачу в системе и полностью контролируете свой доход." },
            ].map((f) => (
              <Card key={f.t}>
                <YellowIcon>{f.i}</YellowIcon>
                <h3 className="font-bold text-lg mt-5">{f.t}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">{f.d}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* КАК ВЫГЛЯДИТ РАБОЧИЙ КАБИНЕТ */}
        <section>
          <h2 data-reveal className="reveal text-3xl sm:text-4xl md:text-5xl font-extrabold text-center tracking-tight">
            Как выглядит рабочий кабинет
          </h2>
          <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
            Мы работаем открыто. Посмотрите на личный кабинет программу, обучения и{" "}
            <span className="text-red font-semibold">реальную панель начислений</span>:
          </p>

          {/* Browser mock 1 */}
          <Card className="mt-8 p-3 md:p-4">
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <span className="w-3 h-3 rounded-full bg-red"></span>
                <span className="w-3 h-3 rounded-full bg-yellow"></span>
                <span className="w-3 h-3 rounded-full bg-[oklch(0.7_0.15_145)]"></span>
                <div className="ml-3 flex-1 bg-muted rounded-md px-3 py-1.5 text-xs text-muted-foreground">Личный кабинет / обучение</div>
              </div>
              <div className="bg-card">
                <Carousel opts={{ loop: true }} className="w-full">
                  <CarouselContent>
                    {[
                      { src: kabinet1.url, alt: "Личный кабинет — дашборд" },
                      { src: kabinet2.url, alt: "Личный кабинет — обучение" },
                    ].map((img) => (
                      <CarouselItem key={img.src}>
                        <div className="flex items-center justify-center p-3 md:p-5 bg-card">
                          <img src={img.src} alt={img.alt} className="w-full h-auto rounded-lg" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-3" />
                  <CarouselNext className="right-3" />
                </Carousel>
              </div>
              <div className="border-t border-border px-5 py-3 text-xs text-muted-foreground flex flex-wrap gap-4 justify-center">
                <span>Обратная связь</span><span>Справка</span><span>© 2006–2026 ООО «ЯНДЕКС»</span><span>Политика</span><span>Правила использования</span>
              </div>
            </div>
            <div className="flex gap-3 mt-5 px-2 pb-2">
              <span className="w-6 h-6 rounded-full bg-yellow text-[oklch(0.25_0.05_60)] flex items-center justify-center text-xs font-bold shrink-0">1</span>
              <p className="text-sm text-muted-foreground"><span className="font-bold text-foreground">Личный кабинет.</span> Бесплатное обучение: короткие, понятные видео-уроки и текстовые инструкции. Менеджер отдела подбора откроет к ним доступ сразу после подтверждения вашей кандидатуры.</p>
            </div>
          </Card>

          {/* Browser mock 2 — статистика */}
          <Card className="mt-6 p-3 md:p-4">
            <div className="rounded-xl overflow-hidden bg-card">
              <Carousel opts={{ loop: true }} className="w-full">
                <CarouselContent>
                  {[
                    { src: stat1.url, alt: "Статистика — общий вид" },
                    { src: stat2.url, alt: "Статистика — пример 2" },
                    { src: stat3.url, alt: "Статистика — пример 3" },
                    { src: stat4.url, alt: "Статистика — пример 4" },
                  ].map((img) => (
                    <CarouselItem key={img.src}>
                      <div className="w-full aspect-[16/12] bg-muted flex items-center justify-center">
                        <img src={img.src} alt={img.alt} className="w-full h-full object-contain" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-3" />
                <CarouselNext className="right-3" />
              </Carousel>
            </div>
            <div className="flex gap-3 mt-5 px-2 pb-2">
              <span className="w-6 h-6 rounded-full bg-yellow text-[oklch(0.25_0.05_60)] flex items-center justify-center text-xs font-bold shrink-0">2</span>
              <p className="text-sm text-muted-foreground"><span className="font-bold text-foreground">Рабочая панель статистики.</span> Прозрачный учёт выполненных вами задач и начисления официальных вознаграждений напрямую от Яндекса на основе выполненных KPI.</p>
            </div>
          </Card>
        </section>

        {/* КАК НАЧИНАЕТЕ */}
        <section>
          <SectionLabel>простой процесс</SectionLabel>
          <h2 data-reveal className="reveal text-3xl sm:text-4xl md:text-5xl font-extrabold text-center tracking-tight mb-6 md:mb-10">
            Как вы начинаете работать
          </h2>
          <div className="space-y-4">
            {[
              { i: <Send className="w-5 h-5" />, t: "Подтверждение", d: "Менеджер отдела подбора подтверждает вашу кандидатуру." },
              { i: <FileEdit className="w-5 h-5" />, t: "Заключение договора", d: "Оформление официального договора с Яндексом." },
              { i: <GraduationCap className="w-5 h-5" />, t: "Короткий инструктаж", d: "Вы получаете доступ к личному кабинету с пошаговыми уроками (как на скриншоте выше)." },
              { i: <BarChart3 className="w-5 h-5" />, t: "Выполнение задач и доход", d: "Вы работаете в удобное время и получаете честные выплаты на основе прозрачной статистики." },
            ].map((s, idx) => (
              <Card key={s.t}>
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <YellowIcon>{s.i}</YellowIcon>
                    <div className="text-[10px] tracking-[0.2em] text-muted-foreground font-semibold mt-2">ШАГ {idx+1}</div>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold">{s.t}</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{s.d}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ОТЗЫВЫ */}
        <section>
          <SectionLabel>отзывы команды</SectionLabel>
          <h2 data-reveal className="reveal text-3xl sm:text-4xl md:text-5xl font-extrabold text-center tracking-tight mb-6 md:mb-10">
            Что говорят специалисты
          </h2>
          <div className="space-y-4">
            {[
              { n: "Михаил", c: "г. Москва", t: "Нашёл вакансию на Авито, сначала сомневался, сейчас в интернете много обмана. Но когда зашёл на сайт и пообщался с менеджером, понял, что всё серьёзно. Огромный плюс — прямой договор с Яндексом, всё официально и в белую. Задачи выполняю по регламенту, доход по KPI полностью устраивает." },
              { n: "Ольга", c: "г. Нижний Новгород", t: "«Отличный формат удалёнки для обычных людей. График полностью свободный, работаю когда ребёнок спит. Система учёта в кабинете прозрачная, выплаты приходят чётко по договору напрямую от Яндекса.»" },
              { n: "Денис", c: "г. Краснодар", t: "«Работаю здесь уже несколько месяцев. Главный плюс — понятные пошаговые алгоритмы и полная уверенность, что тебя не кинут, потому что договор официальный.»" },
            ].map((r) => (
              <Card key={r.n}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-yellow flex items-center justify-center font-bold text-[oklch(0.25_0.05_60)]">{r.n[0]}</div>
                    <div>
                      <div className="font-bold">{r.n}</div>
                      <div className="text-xs text-muted-foreground">{r.c}</div>
                    </div>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-red" />
                </div>
                <p className="text-muted-foreground mt-4 leading-relaxed">{r.t}</p>
                <div className="flex gap-1 mt-4 text-red">
                  {Array.from({length:5}).map((_,i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <SectionLabel>вопросы и ответы</SectionLabel>
          <h2 data-reveal className="reveal text-3xl sm:text-4xl md:text-5xl font-extrabold text-center tracking-tight mb-6 md:mb-10">
            Ответы на главные вопросы
          </h2>
          <div className="space-y-4">
            {[
              { q: "Нужен ли опыт?", a: "Нет. Все рабочие процессы адаптированы для обычных пользователей. После верификации профиля вы получаете доступ к подробной базе знаний и пошаговым регламентам, которые позволят быстро разобраться в алгоритмах размещения." },
              { q: "Можно ли совмещать это с основной работой или учёбой?", a: "Да. Формат работы полностью свободный. У нас нет фиксированных смен или обязательных часов присутствия в сети. Вы сами распределяете нагрузку в течение дня (в среднем от 3-4 часов) и совмещаете процесс с вашим привычным графиком." },
              { q: "Какие устройства нужны для выполнения задач?", a: "Для работы достаточно иметь стабильный интернет и любое удобное устройство: обычный смартфон, планшет, ноутбук или персональный компьютер. Вы можете выполнять задачи из любой удобной локации." },
              { q: "Как и когда происходят выплаты?", a: "Расчёт за выполненный объём задач (KPI) происходит строго один раз в месяц. Все начисления формируются автоматически на основе прозрачной статистики в вашем личном кабинете и переводятся официально на ваши личные банковские реквизиты." },
            ].map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <Card className="text-center py-10">
            <div className="w-14 h-14 rounded-full bg-yellow flex items-center justify-center mx-auto">
              <Send className="w-6 h-6 text-[oklch(0.25_0.05_60)]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold mt-6 tracking-tight">
              Ознакомились с информацией и готовы перейти к оформлению?
            </h3>
            <p className="text-muted-foreground mt-3">
              Переходите обратно в диалог, чтобы продолжить общение с{" "}
              <span className="text-red font-semibold">менеджером отдела подбора</span>.
            </p>
          </Card>
          <p className="text-center text-sm text-muted-foreground mt-10 leading-relaxed">
            Отдел кадров / Программа продвижения ИТ-сервисов официального партнёра Яндекса.
            <br />Все права защищены.
          </p>
        </section>
      </main>
    </div>
  );
}
