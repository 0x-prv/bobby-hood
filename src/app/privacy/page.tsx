export const metadata = {
  title: "Privacy | $BOBBY",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-old-gold mb-3">
          Legal
        </p>
        <h1 className="font-display text-4xl text-warm-ivory mb-10">
          Privacy
        </h1>

        <div className="space-y-6 text-sm sm:text-base text-warm-ivory/75 leading-relaxed">
          <p>
            This website does not require account creation and does not
            collect personal financial information directly. Standard,
            anonymized analytics may be used to understand how visitors
            interact with the site.
          </p>
          <p>
            If you choose to connect a wallet or provide contact information
            in the future (for example, to join a mailing list), that
            information will only be used for community communication
            purposes and will not be sold to third parties.
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