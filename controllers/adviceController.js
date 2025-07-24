// Simple Swahili health advice (could be expanded or made dynamic)
exports.getAdvice = (req, res) => {
  const adviceList = [
    "Kunywa maji mengi kila siku.",
    "Pumzika vya kutosha na epuka msongo wa mawazo.",
    "Kula chakula bora na chenye virutubisho.",
    "Hudhuria kliniki mara kwa mara.",
    "Fanya mazoezi mepesi kama kutembea.",
    "Wasiliana na mkunga au daktari ukihisi mabadiliko yasiyo ya kawaida.",
  ];
  res.json({ advice: adviceList });
};
