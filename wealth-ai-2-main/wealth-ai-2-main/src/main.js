const navItems = [
  ['Home', 'home'], ['Graphs', 'graphs'], ['Features', 'features'], ['Solutions', 'solutions'], ['AI Technology', 'technology'], ['Demo', 'demo'], ['Benefits', 'benefits'], ['FAQ', 'faq'], ['Contact', 'contact']
];
const stats = [['360°', 'Financial visibility'], ['24/7', 'AI guidance'], ['5 min', 'Goal setup'], ['10x', 'Faster insights']];
const problems = ['Fragmented dashboards across accounts', 'Generic advice with little personalization', 'Low financial awareness among new investors', 'Complex investment choices and jargon', 'Limited access to affordable wealth guidance'];
const features = [
  ['🤖', 'AI Wealth Advisor', 'Human-like financial guidance tailored to income, goals, and risk appetite.'],
  ['📊', 'Spending Analysis', 'Automatic category insights that reveal habits and savings opportunities.'],
  ['🎯', 'Goal Planning', 'Plan education, travel, retirement, and emergency goals with milestones.'],
  ['💸', 'Investment Suggestions', 'Curated ideas aligned with time horizon, diversification, and risk profile.'],
  ['📈', 'Portfolio Insights', 'Simple portfolio summaries, allocation views, and performance signals.'],
  ['💙', 'Financial Health Score', 'A clear score that converts money behavior into actionable next steps.'],
  ['✨', 'AI Avatar', 'Conversational, friendly product guide for first-time investors and families.'],
  ['🔔', 'Smart Notifications', 'Timely reminders for budgets, bills, market events, and goal progress.'],
  ['🔮', 'Predictive Analytics', 'Forward-looking scenarios for cash flow, savings, and investment growth.'],
  ['🧠', 'Personalized Recommendations', 'Context-aware nudges designed for every life stage and user segment.']
];
const solutions = ['Fragmented wealth management', 'Lack of personalized advice', 'Poor financial awareness', 'Limited accessibility', 'Investment confusion'];
const workflow = [
  ['Connect Signals', 'Mock banking, spending, income, and goal signals are organized securely.'],
  ['Understand Behavior', 'AI studies patterns, recurring expenses, savings gaps, and preferences.'],
  ['Profile Risk', 'User comfort, liquidity needs, and time horizon shape the advisory layer.'],
  ['Recommend Actions', 'The system produces simple, personalized nudges and portfolio ideas.'],
  ['Explain Clearly', 'AI avatar converts complex finance into friendly next-best actions.']
];
const demo = [['Spending Analysis', '₹42,300', 'Monthly spend: dining increased 12%, utilities stable.'], ['Portfolio Preview', '62% Equity', 'Balanced allocation with medium risk profile.'], ['Goal Planner', '74%', 'Emergency fund goal projected in 5 months.'], ['Recommendation', 'SIP + Debt', 'Diversified mock suggestion for stable progress.']];
const benefits = [['🎓', 'Students', 'Learn budgeting, build savings habits, and plan education goals early.'], ['💼', 'Salaried Employees', 'Optimize salary inflows, tax-aware investments, and emergency funds.'], ['🧑‍💻', 'Professionals', 'Manage multiple goals, irregular expenses, and long-term wealth creation.'], ['👵', 'Senior Citizens', 'Understand safe income planning, reminders, and simplified guidance.'], ['🌱', 'First-Time Investors', 'Start confidently with risk profiling, explainers, and guided portfolios.']];
const faqs = [ ['How does WealthWise AI help users?', 'WealthWise AI provides personalized financial insights, budgeting support, investment guidance, and goal-based recommendations powered by AI.'],
              ['Are the recommendations personalized?', 'Yes. Recommendations are tailored using spending patterns, financial goals, savings habits, and user preferences.'],
              ['Is my financial data secure?', 'Yes. WealthWise AI follows secure design principles to protect user information and ensure data privacy.'],
              ['Who can use WealthWise AI?', 'Anyone can use WealthWise AI, from beginners to experienced investors seeking smarter financial decisions.'] ];

const $ = (id) => document.getElementById(id);
function card(html, extra = '') { return `<div class="glass reveal rounded-3xl p-7 transition duration-300 hover:-translate-y-2 hover:shadow-glow ${extra}">${html}</div>`; }
function render() {
  const nav = navItems.map(([label, id]) => `<a class="nav-link text-sm font-semibold text-slate-600 transition hover:text-idbi dark:text-slate-300" href="#${id}">${label}</a>`).join('');
  $('desktopNav').innerHTML = nav;
  $('mobileNav').innerHTML = nav;
  $('stats').innerHTML = stats.map(([num, label]) => card(`<p class="text-4xl font-black text-idbi">${num}</p><p class="mt-2 font-semibold text-slate-600 dark:text-slate-400">${label}</p>`, 'text-center')).join('');
  $('problemCards').innerHTML = problems.map((p) => card(`<p class="font-semibold text-slate-700 dark:text-slate-300">${p}</p>`, 'p-5')).join('');
  $('featureGrid').innerHTML = features.map(([icon, title, text]) => card(`<div class="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-2xl dark:bg-blue-950">${icon}</div><h3 class="text-xl font-black dark:text-white">${title}</h3><p class="mt-3 text-slate-600 dark:text-slate-400">${text}</p>`)).join('');
  $('solutionList').innerHTML = solutions.map((item, index) => `<div class="glass reveal grid items-center gap-6 rounded-3xl p-7 md:grid-cols-[90px_1fr_1fr]"><span class="grid h-16 w-16 place-items-center rounded-3xl bg-idbi text-2xl font-black text-white">${index + 1}</span><h3 class="text-2xl font-black dark:text-white">${item}</h3><p class="text-slate-600 dark:text-slate-400">WealthWise AI addresses this through consolidated views, contextual education, AI nudges, accessible UX, and mock recommendation flows.</p></div>`).join('');
  $('workflow').innerHTML = workflow.map(([title, text], index) => card(`<span class="grid h-10 w-10 place-items-center rounded-full bg-idbi font-black text-white">${index + 1}</span><h3 class="mt-5 font-black dark:text-white">${title}</h3><p class="mt-2 text-sm text-slate-500">${text}</p>`)).join('');
  $('demoCards').innerHTML = demo.map(([title, value, text]) => `<div class="reveal rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><span class="text-emerald-500">✓</span><h3 class="mt-4 font-bold text-slate-500">${title}</h3><p class="mt-2 text-3xl font-black text-idbi">${value}</p><p class="mt-2 text-sm text-slate-500">${text}</p></div>`).join('');
  $('benefitGrid').innerHTML = benefits.map(([icon, title, text]) => card(`<span class="text-3xl">${icon}</span><h3 class="mt-5 font-black dark:text-white">${title}</h3><p class="mt-2 text-sm text-slate-500">${text}</p>`, 'p-6')).join('');
  $('faqList').innerHTML = faqs.map(([question, answer], index) => `<div class="glass reveal rounded-2xl"><button class="faq-btn flex w-full items-center justify-between p-5 text-left font-bold dark:text-white" data-faq="${index}">${question}<span>⌄</span></button><p class="faq-panel hidden px-5 pb-5 text-slate-600 dark:text-slate-400">${answer}</p></div>`).join('');
}
function wireInteractions() {
  const body = document.body;
  $('themeToggle').addEventListener('click', () => {
    body.classList.toggle('dark');
    document.documentElement.classList.toggle('dark');
    $('themeToggle').textContent = body.classList.contains('dark') ? '☀️' : '🌙';
  });
  $('menuToggle').addEventListener('click', () => $('mobileMenu').classList.toggle('open'));
  $('mobileNav').addEventListener('click', () => $('mobileMenu').classList.remove('open'));
  document.querySelectorAll('.faq-btn').forEach((btn) => btn.addEventListener('click', () => btn.nextElementSibling.classList.toggle('hidden')));
  $('backTop').addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
  const sections = navItems.map(([, id]) => document.getElementById(id));
  const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      if (entry.target.classList.contains('chart')) entry.target.classList.add('show');
    }
  }), { threshold: .14 });
  document.querySelectorAll('.reveal, .chart').forEach((el) => revealObserver.observe(el));
  addEventListener('scroll', () => {
    $('backTop').classList.toggle('hidden', scrollY < 520);
    const current = sections.findLast((section) => section && section.offsetTop - 140 <= scrollY)?.id || 'home';
    document.querySelectorAll('.nav-link').forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
  });
}
render();
wireInteractions();
