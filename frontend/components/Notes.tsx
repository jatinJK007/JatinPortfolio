import React, { useState } from 'react';
import { ArrowUpRight, X, BookOpen } from 'lucide-react';
import { NoteItem } from '../types';

export const Notes: React.FC = () => {
  const [selectedNote, setSelectedNote] = useState<NoteItem | null>(null);

  const notes: NoteItem[] = [
    {
      id: 'sos-permission',
      title: 'Why Play Store rejected my SOS app over one permission',
      type: 'Write-up',
      year: '2026',
      summary:
        'A deep dive into Android foreground service restrictions, emergency sensor access policies, and how to satisfy Google Play audit guidelines for sensitive permissions like ACCESS_FINE_LOCATION and SEND_SMS under automated emergency contexts.',
      snippet:
        '// Solution: Implementing foreground service with type location & sensor privacy disclosures\n<service\n  android:name=".services.EmergencyAlertService"\n  android:foregroundServiceType="location|specialUse"\n  android:exported="false" />',
    },
    {
      id: 'lost-upload-keystore',
      title: 'Recovering a lost upload keystore',
      type: 'Write-up',
      year: '2026',
      summary:
        'Practical step-by-step procedure for generating a new upload key, creating a cryptographically signed PEM certificate request via keytool, and resetting the upload key in Google Play App Signing without downtime.',
      snippet:
        'keytool -genkeypair -alias upload -keyalg RSA -keysize 2048 -validity 10000 -keystore upload.jks\nkeytool -export -rfc -alias upload -file upload_certificate.pem -keystore upload.jks',
    },
    {
      id: 'raster-jank-flutter',
      title: 'Raster jank in Flutter and shader warm-up',
      type: 'Write-up',
      year: '2026',
      summary:
        'Diagnosing frame drops on early renders using Flutter DevTools raster timeline, transitioning to Impeller on Android/Vulkan, and mitigating shader compilation jank with targeted warm-up sequences.',
      snippet:
        '// Impeller flag in AndroidManifest.xml\n<meta-data\n  android:name="io.flutter.embedding.android.EnableImpeller"\n  android:value="true" />',
    },
    {
      id: 'drift-cache-fcm',
      title: 'Drift cache with TTL and FCM-triggered sync',
      type: 'Write-up',
      year: '2026',
      summary:
        'Building an offline-first local SQLite repository in Flutter using Drift with time-to-live expiration policies, silent Firebase Cloud Messaging data payloads, and conflict-free background synchronisation.',
      snippet:
        '// Watcher stream in Drift with stale-while-revalidate pattern\nStream<List<AccountEntity>> watchAccountsWithTtl() {\n  syncIfStale(Duration(minutes: 15));\n  return select(accounts).watch();\n}',
    },
  ];

  return (
    <section id="notes" className="py-24 md:py-32 px-6 md:px-10 max-w-[1280px] mx-auto border-b border-border/40">
      <div className="mb-14">
        <span className="font-inter font-medium text-[11px] tracking-label text-coral uppercase block mb-3">
          TECHNICAL NOTES
        </span>
        <h2 className="font-syne font-semibold text-[clamp(30px,4vw,60px)] tracking-tighterH2 leading-tight text-foreground">
          Engineering post-mortems & deep dives.
        </h2>
      </div>

      {/* Plain list of technical write-ups with platform and year, no images */}
      <div className="divide-y divide-border/60 border-y border-border/60">
        {notes.map((note) => (
          <div
            key={note.id}
            onClick={() => setSelectedNote(note)}
            className="group py-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-card/40 px-3 -mx-3 rounded-lg transition-colors"
          >
            <div className="flex-1">
              <h3 className="font-syne font-medium text-xl md:text-2xl text-foreground group-hover:text-coral transition-colors">
                {note.title}
              </h3>
            </div>

            <div className="flex items-center space-x-6 text-sm font-mono shrink-0">
              <span className="text-muted">{note.type}</span>
              <span className="text-coral">{note.year}</span>
              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted group-hover:border-coral group-hover:text-coral transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Reading a Note */}
      {selectedNote && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div className="relative w-full max-w-2xl bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-border/60 pb-4 mb-6">
              <div>
                <span className="font-mono text-xs text-coral tracking-widest uppercase block mb-1">
                  {selectedNote.type} · {selectedNote.year}
                </span>
                <h3 className="font-syne font-semibold text-2xl text-foreground">
                  {selectedNote.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedNote(null)}
                aria-label="Close note preview"
                className="p-2 text-muted hover:text-foreground rounded-full hover:bg-border/40 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 font-inter font-light text-base text-foreground/90 leading-relaxed">
              <p>{selectedNote.summary}</p>

              {selectedNote.snippet && (
                <div className="mt-4 p-4 rounded-xl bg-black border border-border font-mono text-xs text-coral/90 overflow-x-auto">
                  <pre className="whitespace-pre">{selectedNote.snippet}</pre>
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-border/40 flex justify-between items-center">
              <span className="font-mono text-xs text-muted flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-coral" />
                By Jatin · Delhi NCR
              </span>
              <button
                onClick={() => setSelectedNote(null)}
                className="px-4 py-2 rounded-lg bg-coral text-black font-inter font-medium text-xs tracking-label uppercase"
              >
                Close Note
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
