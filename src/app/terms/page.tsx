export const metadata = {
  title: "Terms | $BOBBY",
};

export default function TermsPage() {
  return (
    <main className="flex-1 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-old-gold mb-3">
          Legal
        </p>
        <h1 className="font-display text-4xl text-warm-ivory mb-10">Terms</h1>

        <div className="space-y-6 text-sm sm:text-base text-warm-ivory/75 leading-relaxed">
          <p>
            This website and the $BOBBY community token are provided for
            entertainment and community participation purposes only. By
            accessing this site, you acknowledge that $BOBBY is an unofficial
            community memecoin and is not affiliated with, sponsored by, or
            endorsed by Robinhood Markets, Inc. or any of its affiliates.
          </p>
          <p>
            Nothing on this website constitutes financial, investment, legal,
            or tax advice. You are solely responsible for any decisions you
            make regarding participation in the $BOBBY community or token.
          </p>
          <p>
            Cryptocurrency and memecoin assets are highly speculative and
            volatile. There is no guarantee of value, liquidity, or return.
            Never commit funds you cannot afford to lose.
          </p>
          <p>
            This draft is provided as placeholder legal language and has not
            been reviewed by qualified legal counsel. It should be reviewed
            and finalized by a licensed attorney before this site is used in
            a live production or commercial capacity.
          </p>
        </div>
      </div>
    </main>
  );
}