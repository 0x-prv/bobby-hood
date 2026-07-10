export const metadata = {
  title: "Disclosures | $BOBBY",
};

export default function DisclosuresPage() {
  return (
    <main className="flex-1 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-old-gold mb-3">
          Legal
        </p>
        <h1 className="font-display text-4xl text-warm-ivory mb-10">
          Disclosures
        </h1>

        <div className="space-y-6 text-sm sm:text-base text-warm-ivory/75 leading-relaxed">
          <p>
            $BOBBY is an unofficial community memecoin created for
            entertainment and community participation. It is not affiliated
            with, sponsored by, or endorsed by Robinhood Markets, Inc. or any
            of its affiliates.
          </p>
          <p>
            Cryptocurrency and memecoins are highly speculative and volatile.
            Nothing on this website constitutes financial, investment, legal,
            or tax advice. Always conduct your own research and never commit
            funds you cannot afford to lose.
          </p>
          <p>
            No official contract address has been published at this time.
            Any contract address claiming to be $BOBBY outside of official
            community channels should be treated with caution. Always verify
            information through official community links before taking any
            action.
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