import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import './cookie-consent.css';

const cookieName = 'blacksand_cookie_preferences_v1';
const cookieLifetime = 180 * 24 * 60 * 60;
const fontStylesheet = 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&display=swap';
type Preference = 'essential' | 'all';

function readPreference(): Preference | null {
  try {
    const entry = document.cookie.split(';').find(cookie => cookie.trimStart().startsWith(`${cookieName}=`));
    const value = entry?.slice(entry.indexOf('=') + 1);
    return value === 'essential' || value === 'all' ? value : null;
  } catch {
    return null;
  }
}

function writePreference(preference: Preference) {
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  try {
    document.cookie = `${cookieName}=${preference}; Max-Age=${cookieLifetime}; Path=/; SameSite=Lax${secure}`;
    return readPreference() === preference;
  } catch {
    return false;
  }
}

export function CookieConsent({ settingsOpen, onOpenSettings, onCloseSettings }: {
  settingsOpen: boolean;
  onOpenSettings: () => void;
  onCloseSettings: () => void;
}) {
  const [preference, setPreference] = useState<Preference | null>(() =>
    typeof document === 'undefined' ? null : readPreference(),
  );
  const [allowFonts, setAllowFonts] = useState(false);
  const [status, setStatus] = useState('');
  const banner = useRef<HTMLElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (preference !== 'all') return;
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = fontStylesheet;
    document.head.append(stylesheet);
    return () => stylesheet.remove();
  }, [preference]);

  useEffect(() => {
    if (settingsOpen && dialog.current && !dialog.current.open) {
      setAllowFonts(preference === 'all');
      dialog.current.showModal();
    }
  }, [settingsOpen, preference]);

  function savePreference(next: Preference) {
    const persisted = writePreference(next);
    dialog.current?.close();
    const returnToPage = banner.current?.contains(document.activeElement);
    setPreference(next);
    setStatus(persisted ? 'Cookie preferences saved.' : 'Your choice applies to this page visit. Your browser could not save it.');
    if (returnToPage) document.getElementById('main-content')?.focus({ preventScroll: true });
  }

  return <>
    {preference === null && <section ref={banner} className="cookie-banner" aria-labelledby="cookie-banner-title">
      <h2 id="cookie-banner-title">Your cookie choices</h2>
      <p>We use a cookie to remember your choice. You can also allow the site to load typefaces from Google Fonts. <Link to="/privacy#cookies">Privacy notice</Link></p>
      <div className="cookie-actions">
        <button type="button" className="cookie-button" onClick={() => savePreference('essential')}>Reject optional</button>
        <button type="button" className="cookie-button" onClick={() => savePreference('all')}>Accept all</button>
        <button type="button" className="cookie-settings-link" aria-haspopup="dialog" aria-controls="cookie-settings" onClick={onOpenSettings}>Cookie settings</button>
      </div>
    </section>}
    <dialog ref={dialog} id="cookie-settings" className="cookie-dialog" aria-labelledby="cookie-settings-title"
      onClose={onCloseSettings}>
      <div className="cookie-dialog-inner">
        <div className="cookie-dialog-header">
          <h2 id="cookie-settings-title">Cookie settings</h2>
          <button type="button" className="icon-button" aria-label="Close cookie settings" onClick={() => dialog.current?.close()}><X aria-hidden="true" size={22} /></button>
        </div>
        <p>Choose whether to allow the optional service. You can change your choice at any time.</p>
        <div className="cookie-option">
          <h3>Essential storage</h3>
          <span className="cookie-option-status">Always on</span>
          <p>Remembers your cookie choice and whether you’ve seen the welcome animation this session.</p>
        </div>
        <label className="cookie-option">
          <span id="cookie-font-label" className="cookie-option-name">External fonts</span>
          <input type="checkbox" checked={allowFonts} onChange={event => setAllowFonts(event.target.checked)}
            aria-labelledby="cookie-font-label" aria-describedby="cookie-font-details" />
          <span id="cookie-font-details" className="cookie-option-details">Loads typefaces from Google Fonts. These requests share your IP address with Google.</span>
        </label>
        <div className="cookie-actions">
          <button type="button" className="cookie-button" onClick={() => savePreference('essential')}>Reject optional</button>
          <button type="button" className="cookie-button" onClick={() => savePreference('all')}>Accept all</button>
          <button type="button" className="cookie-button cookie-button-save" onClick={() => savePreference(allowFonts ? 'all' : 'essential')}>Save preferences</button>
        </div>
      </div>
    </dialog>
    <span className="sr-only" role="status">{status}</span>
  </>;
}
