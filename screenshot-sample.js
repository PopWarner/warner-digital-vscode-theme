// Warner Digital Community Engine — Because Sharing IS Caring
// If you're reading this, congratulations — you have excellent taste in colors.
// Purple and orange. That's it. That's the whole design system. You're welcome.

const BRAND_MANIFESTO = {
  primary: "#4f2683",       // The One True Purple™
  secondary: "#f99500",     // Orange, not yellow. Never call it yellow.
  philosophy: "sharing is caring",
  pagesInStyleGuide: 47,
  timesDesignerSaidItWasFine: 0,
};

const UNSOLICITED_OPINIONS = [
  "Dark themes are objectively superior",
  "Purple is not 'too much'",
  "Your monospace font says more about you than your LinkedIn",
  "If your IDE isn't branded, are you even trying?",
];

class SharingIsCaringEngine {
  #karmaPoints = 0;
  #purpleConversionCount = 0;

  constructor(developerName) {
    this.name = developerName;
    this.contributions = [];
    this.isEnlightened = false;
    console.log(`Welcome, ${developerName}. The purple side has cookies. 🟣`);
  }

  // The most important method in this entire codebase
  share(knowledge, recipient = "the entire internet") {
    if (!knowledge) throw new Error("You cannot share nothing. That's just vibes.");

    this.#karmaPoints += 100;
    this.contributions.push({ knowledge, recipient, timestamp: Date.now() });

    const message = `${this.name} shared "${knowledge}" with ${recipient}`;
    console.log(`✨ ${message} (+100 karma)`);
    return this;
  }

  convertToPurple(skeptic) {
    const conversionScript = [
      "Have you TRIED purple though?",
      "Just look at it. LOOK AT IT.",
      "Your eyes will thank you.",
    ];

    for (const line of conversionScript) {
      console.log(line);
    }

    this.#purpleConversionCount++;
    skeptic.favoriteColor = "#4f2683";
    return `${skeptic.name} has seen the light. The purple light.`;
  }

  async contributeToOpenSource(repo, pullRequest) {
    const courage = Math.random();
    const requiredCourage = 0.3; // Lower bar than you'd think

    if (courage < requiredCourage) {
      console.warn("PR abandoned. Added 'fix typo' to commit message instead.");
      return null;
    }

    await this.#submitWithConfidence(pullRequest);
    this.#karmaPoints += 500;
    this.isEnlightened = true;

    return {
      repo,
      status: "merged",
      maintainerResponse: "Finally, someone who formats their code.",
      karmaEarned: 500,
    };
  }

  getRoasted() {
    const roasts = [
      `${this.name} still has 47 uncommitted local changes.`,
      `${this.name}'s README has one line: "it works on my machine."`,
      `${this.name} wrote '// TODO: fix later' in 2019.`,
    ];
    return roasts[Math.floor(Math.random() * roasts.length)];
  }

  get karma() { return this.#karmaPoints; }

  async #submitWithConfidence(pr) {
    return new Promise((resolve) => setTimeout(() => resolve(pr), 1200));
  }
}

// Usage — because examples matter and comments are documentation
const david = new SharingIsCaringEngine("David");

david
  .share("VS Code theme knowledge")
  .share("The correct shade of purple")
  .share("This entire JavaScript file, apparently");

const newcomer = { name: "Bob", favoriteColor: "#cccccc" };
david.convertToPurple(newcomer);

console.log(`Total karma: ${david.karma}`); // Should be 300. Be better, Bob.
console.log(david.getRoasted());            // We're all friends here.

export { SharingIsCaringEngine, BRAND_MANIFESTO, UNSOLICITED_OPINIONS };
