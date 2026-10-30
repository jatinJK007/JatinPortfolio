// Jatin Kumar's exact photograph asset
export const JATIN_PHOTO_URL = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'; // fallback placeholder if local image isn't loaded

export interface ResumeData {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  skills: {
    category: string;
    items: string;
  }[];
  experience: {
    role: string;
    company: string;
    period: string;
    bullets: string[];
  }[];
  projects: {
    name: string;
    subtitle: string;
    period: string;
    liveUrl?: string;
    githubUrl?: string;
    bullets: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
  };
}

export const JATIN_RESUME: ResumeData = {
  name: 'Jatin Kumar',
  email: 'jatinkumarjkk5@gmail.com',
  phone: '+91-9350237592',
  linkedin: 'https://www.linkedin.com/in/kumarjatinjk',
  github: 'https://github.com/jatinjk007',
  summary:
    'Results-driven Android Developer with 2.5+ years of hands-on experience shipping production-grade mobile applications, including an app live on the Google Play Store. Deep expertise in Kotlin, Jetpack, MVVM, and Clean Architecture, with a strong track record in offline-first system design, hardware-integrated sensor applications, cryptographic security implementations (Android Keystore, AES-256-GCM, PBKDF2, TEE), and LLM-grounded retrieval systems (RAG) using Google Gemini for on-device semantic search and citation-constrained generation. Proven ability to architect modular, testable, and performance-optimized Android systems — from background task orchestration with WorkManager and Coroutines to latency-sensitive async pipelines delivering sub-200ms response times.',
  skills: [
    { category: 'Languages', items: 'Kotlin, Java, Flutter, dart' },
    {
      category: 'Android',
      items: 'Jetpack (ViewModel, LiveData, Navigation, DataStore), RecyclerView, Material UI, Permissions API',
    },
    { category: 'Architecture', items: 'MVVM, Clean Architecture, Bloc, State Management' },
    {
      category: 'Security & Cryptography',
      items: 'Android Keystore, AES-256-GCM, PBKDF2, BiometricPrompt, Play Integrity API',
    },
    { category: 'Data & Networking', items: 'Room, Retrofit, REST APIs, SQLite' },
    {
      category: 'Async & Performance',
      items: 'Coroutines, Background threading, Memory optimization, Lifecycle-aware session management',
    },
    {
      category: 'Sensors & System',
      items: 'GPS, Accelerometer, SmsManager, Services, BroadcastReceiver',
    },
    { category: 'Tools', items: 'Git, Firebase Auth, Firebase Realtime DB' },
  ],
  experience: [
    {
      role: 'Software Developer Executive',
      company: 'FintechSmartSolutions',
      period: 'Jun 2026 – Present',
      bullets: [
        'Architected the application using the BLoC pattern to ensure a clean separation of concerns, resulting in a highly responsive UI that adapts instantly to changing authentication and loan states.',
        'Integrated Drift (SQLite) with reactive streams to manage complex loan lifecycles locally, enabling real-time updates for EMI schedules and credit limits while reducing redundant server requests.',
        'Secured sensitive user data via Flutter Secure Storage and implemented automated collection of hardware metadata and GPS coordinates to enhance fraud detection and risk profiling.',
      ],
    },
    {
      role: 'Android Developer Intern',
      company: 'DSRSecureTech',
      period: 'Jun 2024 – Sep 2024',
      bullets: [
        'Developed secure, offline-first Android applications using Kotlin, MVVM, Room, and Firebase.',
        'Built a Notes application with encrypted local storage and authentication.',
        'Improved UI responsiveness using RecyclerView and optimized lifecycle handling.',
      ],
    },
  ],
  projects: [
    {
      name: 'LegalSaathi',
      subtitle: 'RAG-Powered Indian Legal Assistant',
      period: 'April 2025 – Present',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.application.LegalSathi',
      githubUrl: 'https://github.com/jatinjk007',
      bullets: [
        'Architected an offline-first RAG pipeline in Kotlin, performing on-device cosine similarity search over a Gemini-embedded legal corpus stored in Room.',
        'Designed citation-constrained prompt architecture, restricting model output to retrieved legal context only.',
        'Integrated dual Gemini pipelines — gemini-embedding-001 for retrieval and gemini-2.5-flash for generation — enforcing task-type-consistent embeddings to prevent retrieval-space mismatch.',
      ],
    },
    {
      name: 'SecureAuth',
      subtitle: 'Hardened Mobile Security Framework',
      period: 'Jan 2026 – March 2026',
      githubUrl: 'https://github.com/jatinjk007',
      bullets: [
        'Engineered a multi-layered Android security framework leveraging TEE-backed Keystore, Play Integrity API.',
        'Designed a zero-knowledge authentication system using PBKDF2-based key derivation and biometric-bound cryptographic keys, ensuring no sensitive credentials are ever stored.',
        'Implemented advanced UI security mechanisms including a dynamically scrambled PIN pad, FLAG_SECURE enforcement, overlay/tapjacking detection, and secure session lifecycle management.',
      ],
    },
    {
      name: 'SentryOne',
      subtitle: 'SOS Emergency App',
      period: 'Jun 2025',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.jatinkumar.sentryone',
      githubUrl: 'https://github.com/jatinjk007',
      bullets: [
        'Engineered end-to-end SOS emergency app achieving 95% crash-free user sessions and < 200ms response time via optimized async architecture.',
        'Integrated GPS, runtime permissions, and accelerometer-based shake detection for real-time emergency tracking with 98% location accuracy.',
        'Implemented robust contact management module with AutoCompleteTextView, swipe-to-delete, and persistent offline storage, increasing efficiency by 40%.',
        'Designed responsive UI with dark mode, haptic feedback, and emergency SMS dispatch capabilities via SmsManager.',
      ],
    },
  ],
  education: {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Indira Gandhi University',
    period: '2022 – 2026',
  },
};
