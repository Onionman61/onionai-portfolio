import { Github, Mail } from "lucide-react";

type BrandIconProps = { className?: string; title?: string };

function WechatIcon({ className, title = "WeChat" }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      className={className}
      fill="currentColor"
    >
      {title ? <title>{title}</title> : null}
      <path d="M8.9 3.4C5.2 3.4 2.2 6 2.2 9.2c0 2 1.1 3.8 2.9 4.9l-.8 2.3c-.1.3.2.6.5.5l2.6-1.2c.5.1 1 .2 1.5.2.3 0 .6 0 .9-.1-.1-.4-.1-.8-.1-1.2 0-3.4 3.2-6.2 7.1-6.2.4 0 .8 0 1.2.1C16.6 5.6 13 3.4 8.9 3.4zm-2 4.2c.6 0 1.1.4 1.1 1s-.5 1-1.1 1c-.6 0-1.1-.4-1.1-1s.5-1 1.1-1zm4 0c.6 0 1.1.4 1.1 1s-.5 1-1.1 1c-.6 0-1.1-.4-1.1-1s.5-1 1.1-1z" />
      <path d="M16.6 9.2c-3 0-5.4 2-5.4 4.6 0 1.5.8 2.9 2.2 3.7l-.6 2c-.1.3.2.6.5.5l2.2-1c.4.1.8.1 1.2.1 3 0 5.4-2 5.4-4.6 0-2.5-2.4-4.6-5.5-4.6zm-2 3c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zm4 0c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" />
    </svg>
  );
}

function BilibiliIcon({ className, title = "Bilibili" }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      className={className}
      fill="currentColor"
    >
      {title ? <title>{title}</title> : null}
      <path d="M9.2 3.2c.2-.2.5-.2.7 0l1.2 1.2 1.2-1.2c.2-.2.5-.2.7 0 .2.2.2.5 0 .7l-1.2 1.2h2.4c2.8 0 5 2.2 5 5v7.2c0 2.8-2.2 5-5 5H8.8c-2.8 0-5-2.2-5-5V9.8c0-2.8 2.2-5 5-5h2.4L10 3.9c-.2-.2-.2-.5 0-.7zm5 5H8.8c-1.8 0-3.2 1.4-3.2 3.2v5.8c0 1.8 1.4 3.2 3.2 3.2h5.4c1.8 0 3.2-1.4 3.2-3.2v-5.8c0-1.8-1.4-3.2-3.2-3.2z" />
      <path d="M9.1 12.3c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zm5.8 0c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" />
    </svg>
  );
}

function XiaohongshuIcon({ className, title = "Xiaohongshu" }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      className={className}
      fill="currentColor"
    >
      {title ? <title>{title}</title> : null}
      <path d="M6.2 4.7h11.6c2 0 3.7 1.6 3.7 3.7v7.2c0 2-1.6 3.7-3.7 3.7H6.2c-2 0-3.7-1.6-3.7-3.7V8.4c0-2 1.6-3.7 3.7-3.7zm1.9 4.1c-.3 0-.6.3-.6.6v5.1c0 .3.3.6.6.6h7.8c.3 0 .6-.3.6-.6V9.4c0-.3-.3-.6-.6-.6H8.1z" />
      <path d="M9.2 10.4h1.2l.9 1.4.9-1.4h1.2l-1.5 2.2 1.6 2.5h-1.2l-1-1.6-1 1.6H9l1.6-2.5-1.4-2.2z" />
    </svg>
  );
}

const CONTACTS = [
  {
    id: "email",
    label: "Email",
    value: "769950999@qq.com",
    href: "mailto:769950999@qq.com",
    Icon: Mail,
  },
  {
    id: "wechat",
    label: "WeChat",
    value: "onion61",
    href: undefined,
    Icon: WechatIcon,
  },
  {
    id: "bilibili",
    label: "Liblib",
    value: "洋葱侠",
    href: "https://www.liblib.art/userpage/990349b8fd384f5e8243cb43e8af41b3/publish/model",
    Icon: BilibiliIcon,
  },
  {
    id: "xiaohongshu",
    label: "Xiaohongshu",
    value: "洋葱侠",
    href: "https://www.xiaohongshu.com/user/profile/5ff58a8c0000000001009b0c",
    Icon: XiaohongshuIcon,
  },
] as const;

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl scroll-mt-32 px-6 md:px-10 lg:px-0"
    >
      <footer className="py-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
            Contact
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {CONTACTS.map(({ id, label, value, href, Icon }, idx) => {
              const core = (
                <span className="inline-flex items-center gap-2 text-[11px] text-foreground/90 transition hover:text-foreground">
                  <Icon className="h-4 w-4 text-foreground/75" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    {label}
                  </span>
                  <span className="hidden max-w-[220px] truncate sm:inline">
                    {value}
                  </span>
                </span>
              );

              const item = href ? (
                <a
                  key={id}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  {core}
                </a>
              ) : (
                <span key={id}>{core}</span>
              );

              return (
                <span key={id} className="inline-flex items-center">
                  {item}
                  {idx !== CONTACTS.length - 1 && (
                    <span className="mx-3 hidden h-3 w-px bg-grid/70 sm:inline-block" />
                  )}
                </span>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-grid/60 pt-3 text-[10px] text-muted">
          <span className="font-mono uppercase tracking-[0.22em]">
            © {new Date().getFullYear()} onionman.studio
          </span>
          <span className="font-mono uppercase tracking-[0.22em]">
            blueprint noir
          </span>
        </div>
      </footer>
    </section>
  );
}

