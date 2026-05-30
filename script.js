const form = document.querySelector("#bmiForm");
const unitButtons = document.querySelectorAll(".unit-option");
const heightMetricField = document.querySelector("#heightMetricField");
const heightImperialField = document.querySelector("#heightImperialField");
const heightInput = document.querySelector("#height");
const heightFeetInput = document.querySelector("#heightFeet");
const heightInchesInput = document.querySelector("#heightInches");
const weightInput = document.querySelector("#weight");
const weightUnit = document.querySelector("#weightUnit");
const bmiValue = document.querySelector("#bmiValue");
const bmiCategory = document.querySelector("#bmiCategory");
const bmiAdvice = document.querySelector("#bmiAdvice");
const dailyTip = document.querySelector("#dailyTip");
const foodAdvice = document.querySelector("#foodAdvice");
const maintainAdvice = document.querySelector("#maintainAdvice");
const actionList = document.querySelector("#actionList");
const watchList = document.querySelector("#watchList");
const foodImage = document.querySelector("#foodImage");
const foodGuideTitle = document.querySelector("#foodGuideTitle");
const foodGuideIntro = document.querySelector("#foodGuideIntro");
const eatMoreList = document.querySelector("#eatMoreList");
const limitList = document.querySelector("#limitList");
const healthyRange = document.querySelector("#healthyRange");
const weeklyGoal = document.querySelector("#weeklyGoal");
const weeklyGoalDetail = document.querySelector("#weeklyGoalDetail");
const scaleMarker = document.querySelector("#scaleMarker");
const dailyChecklist = document.querySelector("#dailyChecklist");
const dailyProgressText = document.querySelector("#dailyProgressText");
const dailyProgressBar = document.querySelector("#dailyProgressBar");
const weeklyTrackerTitle = document.querySelector("#weeklyTrackerTitle");
const dayTracker = document.querySelector("#dayTracker");
const resetWeekly = document.querySelector("#resetWeekly");
const calculateWater = document.querySelector("#calculateWater");
const waterResult = document.querySelector("#waterResult");
const waistInput = document.querySelector("#waistInput");
const waistUnit = document.querySelector("#waistUnit");
const checkWaist = document.querySelector("#checkWaist");
const waistResult = document.querySelector("#waistResult");
const clearHistory = document.querySelector("#clearHistory");
const historyList = document.querySelector("#historyList");

let activeUnit = "metric";
let activeWeeklyGoal = "Calculate BMI first";

const categories = [
  {
    max: 18.5,
    name: "Underweight",
    color: "#2b6cb0",
    advice:
      "Your BMI is below the normal range. Focus on eating enough, adding protein, and building strength. If your weight is dropping without trying, consider speaking with a health professional.",
    food:
      "Choose nutrient-dense foods such as rice, oats, potatoes, eggs, fish, chicken, tofu, beans, milk, yogurt, nuts, olive oil, and avocado.",
    maintain:
      "Do not force huge meals immediately. Add one meal or snack each day, combine it with strength training 2 to 3 times per week, and watch whether your weight trends upward steadily.",
    tip: "Add one high-protein snack today, such as yogurt with oats, milk with banana, or tofu with rice.",
    weeklyGoal: "7-Day Nourishing Snack Goal",
    weeklyGoalDetail:
      "For the next 7 days, add one protein-rich snack each day, such as yogurt and oats, milk and eggs, or tofu with rice.",
    image:
      "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Nutrient-dense breakfast with fruit",
    foodTitle: "Underweight: eat enough, eat consistently, and add nutrient density",
    foodIntro:
      "Being underweight does not mean relying on sugar and fried foods. The goal is to raise total intake with more nutritious choices.",
    eatMore: [
      "Carbohydrates: rice, oats, potatoes, pasta, and whole-grain bread to support energy intake.",
      "Protein foods: eggs, fish, chicken, beef, tofu, beans, milk, and yogurt.",
      "Healthy fats: nuts, peanut butter, olive oil, and avocado add calories in smaller portions.",
      "Snack ideas: milk with banana, yogurt with oats, egg sandwich, or soy milk with whole-grain toast.",
    ],
    limit: [
      "Do not rely mainly on soda, candy, milk tea, and fried foods for weight gain.",
      "Avoid replacing meals with caffeine or sweet drinks if they reduce your appetite.",
      "Increase portions gradually to avoid stomach discomfort.",
    ],
    actions: [
      "Track your normal meals for 3 days to see whether you often skip meals or miss protein.",
      "Add a protein source to each meal, such as eggs, fish, chicken, tofu, beans, or milk.",
      "Do strength training 2 to 3 times weekly, such as squats, pushups, rows, or machines.",
      "If your goal is weight gain, start with about 200 to 300 extra calories per day.",
    ],
    watch: [
      "Unintentional weight loss may be related to stress, digestion, thyroid issues, or other health factors.",
      "Frequent fatigue, dizziness, appetite loss, or menstrual changes deserve medical attention.",
      "Weight gain from low-quality foods does not guarantee better nutrition.",
    ],
  },
  {
    max: 25,
    name: "Normal",
    color: "#147a63",
    advice:
      "Your BMI is in the normal range. Keep your routine steady with balanced meals, regular activity, enough sleep, and sustainable habits.",
    food:
      "Prioritize vegetables, fruits, whole grains, eggs, fish, beans, tofu, lean meats, and healthy fats. Fried foods and sweet drinks can fit occasionally, but not as daily defaults.",
    maintain:
      "Aim for about 150 minutes of moderate activity per week. You do not need to weigh yourself daily; once a week at the same time is enough for trend awareness.",
    tip: "Keep it simple today: include protein in one meal, vegetables in one meal, and walk a little more.",
    weeklyGoal: "7-Day Steady Routine",
    weeklyGoalDetail:
      "For the next 7 days, complete three 30-minute walks and include protein plus vegetables in your meals.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Balanced healthy meal plate",
    foodTitle: "Normal: maintain balance without extreme restriction",
    foodIntro:
      "A normal BMI does not mean you need to chase a lower weight. Focus on stable food quality, movement, and sleep.",
    eatMore: [
      "Vegetables: leafy greens, tomatoes, carrots, mushrooms, and cucumbers.",
      "Fruits: apples, oranges, bananas, berries, and papaya as practical sweet options.",
      "Protein foods: fish, eggs, tofu, beans, chicken, and low-sugar dairy.",
      "Whole grains: oats, brown rice, whole-grain bread, and corn for fiber.",
    ],
    limit: [
      "Sugary drinks, milk tea, and sweet coffees should not become everyday defaults.",
      "Fried foods, chips, processed meats, and salty snacks are better kept moderate.",
      "Alcohol adds calories and can affect sleep and appetite control.",
    ],
    actions: [
      "Keep a consistent sleep and wake time when possible.",
      "Plan at least 150 minutes of moderate activity per week, such as brisk walking, cycling, swimming, or sports.",
      "Add 2 strength sessions per week to support muscle and metabolism.",
      "Track weight weekly rather than daily if you want trend awareness.",
    ],
    watch: [
      "A normal BMI does not automatically mean low health risk if waist size, blood pressure, blood sugar, or activity habits are poor.",
      "Short-term weight changes can come from food, stress, sleep, and water balance.",
      "Avoid extreme dieting when your weight is already in a healthy range.",
    ],
  },
  {
    max: 30,
    name: "Overweight",
    color: "#b7791f",
    advice:
      "Your BMI is above the normal range. Start with realistic changes such as reducing sugary drinks, walking more, and limiting late-night snacking.",
    food:
      "Do not cut carbohydrates completely. Choose sensible portions of rice, oats, potatoes, corn, or whole-grain bread. Add protein and vegetables for fullness.",
    maintain:
      "Set a small first goal: reduce sugary drinks and late-night snacks for 2 weeks, and add 15 to 20 minutes of walking daily.",
    tip: "Swap one sugary drink today for water, unsweetened tea, sparkling water, or black coffee.",
    weeklyGoal: "7-Day No Sugary Drinks Goal",
    weeklyGoalDetail:
      "For the next 7 days, replace soda, milk tea, juice, or sweet coffee with water, unsweetened tea, or black coffee.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Fresh vegetables and healthy ingredients",
    foodTitle: "Overweight: increase fullness and reduce hidden calories",
    foodIntro:
      "You do not need to eat painfully little. Start with sweet drinks, snacks, late-night eating, sauces, and portion sizes.",
    eatMore: [
      "High-fiber vegetables: leafy greens, broccoli, cucumber, tomatoes, and mushrooms.",
      "Protein foods: fish, chicken breast, eggs, tofu, beans, and unsweetened yogurt.",
      "Portioned carbohydrates: rice, oats, potatoes, corn, and whole-grain bread.",
      "Lower-calorie drinks: water, unsweetened tea, black coffee, and sparkling water.",
    ],
    limit: [
      "Milk tea, soda, juice, and sweet coffee can add calories without much fullness.",
      "Late-night snacks, fried foods, chips, cookies, and cakes are easy to overeat.",
      "Sauces such as mayonnaise, creamy dressings, and sweet sauces can add hidden calories.",
    ],
    actions: [
      "Find the easiest calorie source to reduce first, often sweet drinks, snacks, late-night meals, or sauces.",
      "Eat protein and vegetables before carbohydrates to support fullness.",
      "Walk 15 to 20 extra minutes per day before jumping into intense workouts.",
      "A realistic first target is losing about 3% to 5% of body weight over 8 to 12 weeks.",
    ],
    watch: [
      "Measure waist size too. A smaller waist can be meaningful even if scale weight changes slowly.",
      "Avoid cutting all carbohydrates if it leads to cravings or overeating later.",
      "High blood pressure, high blood sugar, fatty liver, or loud snoring are good reasons to get checked.",
    ],
  },
  {
    max: Infinity,
    name: "Obesity",
    color: "#c8553d",
    advice:
      "Your BMI is in the obesity range. Focus on safe, steady changes and consider tracking waist size, blood pressure, blood sugar, and cholesterol with professional support.",
    food:
      "Start with the plate method: half vegetables, one quarter protein, and one quarter carbohydrates. Reduce sugary drinks, fried foods, snacks, and high-calorie sauces.",
    maintain:
      "You do not need to start with hard workouts. Begin with a 10-minute walk after meals and build toward 30 minutes per day as tolerated.",
    tip: "Do one manageable thing today: walk for 10 minutes after a meal.",
    weeklyGoal: "7-Day After-Meal Walk Goal",
    weeklyGoalDetail:
      "For the next 7 days, walk for at least 10 minutes after one meal per day. If you feel unwell, lower the intensity or speak with a clinician.",
    image:
      "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Healthy plate with vegetables",
    foodTitle: "Obesity: prioritize safety, stability, and repeatable habits",
    foodIntro:
      "In the obesity range, sustainable changes and health markers such as waist size, blood pressure, blood sugar, and cholesterol matter more than rushing.",
    eatMore: [
      "Half-plate vegetables: leafy greens, broccoli, tomatoes, cucumber, and mushrooms.",
      "Enough protein: fish, chicken, eggs, tofu, beans, and low-sugar dairy.",
      "Controlled carbohydrates: rice, oats, potatoes, and whole-grain bread in practical portions.",
      "Simple cooking methods: steamed, boiled, grilled, baked, or lightly stir-fried foods.",
    ],
    limit: [
      "Sugary drinks, milk tea, alcohol, and sweet coffee are practical first targets to reduce.",
      "Fried foods, processed meats, salty snacks, and desserts should not appear daily.",
      "Avoid extreme fasting or unverified weight-loss pills, especially with medical conditions.",
    ],
    actions: [
      "Start with drinks: reduce sugary drinks, milk tea, alcohol, and sweet coffee.",
      "Use the plate method: half vegetables, one quarter protein, one quarter carbohydrates.",
      "Walk for 10 minutes after meals 1 to 3 times per day, instead of forcing long workouts immediately.",
      "Track waist size, blood pressure, and weight trends if possible. Aim for slow progress.",
    ],
    watch: [
      "Chest discomfort, shortness of breath, knee pain, or chronic conditions are reasons to discuss exercise plans with a clinician.",
      "Blood pressure, blood sugar, cholesterol, fatty liver, and sleep apnea can matter more than the BMI number alone.",
      "Very low-calorie diets and unverified weight-loss drugs can carry real risks.",
    ],
  },
];

function getCategory(bmi) {
  return categories.find((category) => bmi < category.max);
}

function updateResult(bmi, heightM) {
  const category = getCategory(bmi);
  const minHealthyWeight = 18.5 * heightM ** 2;
  const maxHealthyWeight = 24.9 * heightM ** 2;

  bmiValue.textContent = bmi.toFixed(1);
  bmiCategory.textContent = category.name;
  bmiCategory.style.background = `${category.color}18`;
  bmiCategory.style.color = category.color;
  bmiAdvice.textContent = category.advice;
  foodAdvice.textContent = category.food;
  maintainAdvice.textContent = category.maintain;
  dailyTip.textContent = category.tip;
  foodImage.src = category.image;
  foodImage.alt = category.imageAlt;
  foodGuideTitle.textContent = category.foodTitle;
  foodGuideIntro.textContent = category.foodIntro;
  healthyRange.textContent = formatHealthyRange(minHealthyWeight, maxHealthyWeight);
  weeklyGoal.textContent = category.weeklyGoal;
  weeklyGoalDetail.textContent = category.weeklyGoalDetail;
  weeklyTrackerTitle.textContent = category.weeklyGoalDetail;
  activeWeeklyGoal = category.weeklyGoal;
  updateScaleMarker(bmi);
  saveBmiHistory(bmi, category.name);
  renderHistory();
  renderWeeklyTracker();
  renderList(eatMoreList, category.eatMore);
  renderList(limitList, category.limit);
  renderList(actionList, category.actions);
  renderList(watchList, category.watch);
}

function renderList(listElement, items) {
  listElement.innerHTML = "";

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listElement.appendChild(listItem);
  });
}

function updateScaleMarker(bmi) {
  const minBmi = 12;
  const maxBmi = 40;
  const clampedBmi = Math.min(Math.max(bmi, minBmi), maxBmi);
  const markerPosition = ((clampedBmi - minBmi) / (maxBmi - minBmi)) * 100;

  scaleMarker.style.left = `${markerPosition}%`;
}

function formatHealthyRange(minKg, maxKg) {
  if (activeUnit === "imperial") {
    const minLb = minKg / 0.45359237;
    const maxLb = maxKg / 0.45359237;

    return `${minLb.toFixed(1)}lb - ${maxLb.toFixed(1)}lb`;
  }

  return `${minKg.toFixed(1)}kg - ${maxKg.toFixed(1)}kg`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const measurements = getMeasurements();

  if (!measurements) {
    bmiValue.textContent = "--";
    bmiCategory.textContent = "Enter valid numbers";
    bmiAdvice.textContent = "Height and weight must be greater than 0 to calculate BMI.";
    foodAdvice.textContent = "Enter a valid height and weight to receive food guidance.";
    maintainAdvice.textContent = "Your maintenance plan will appear after a valid calculation.";
    dailyTip.textContent =
      activeUnit === "metric"
        ? "Check your entries, such as height 170 and weight 65."
        : "Check your entries, such as height 5ft 7in and weight 150lb.";
    healthyRange.textContent = "--";
    weeklyGoal.textContent = "Calculate BMI first";
    weeklyGoalDetail.textContent = "Your result will unlock a small goal that is easier to follow.";
    weeklyTrackerTitle.textContent = "Calculate your BMI to receive a 7-day goal.";
    activeWeeklyGoal = "Calculate BMI first";
    scaleMarker.style.left = "0";
    renderWeeklyTracker();
    foodImage.src =
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=80";
    foodImage.alt = "Balanced healthy meal";
    foodGuideTitle.textContent = "Calculate your BMI to get food suggestions";
    foodGuideIntro.textContent =
      "This section will list foods to prioritize and foods to keep moderate based on your BMI category.";
    renderList(eatMoreList, [
      "Vegetables, fruits, whole grains, protein foods, and healthy fats are a strong foundation.",
    ]);
    renderList(limitList, [
      "Sugary drinks, fried foods, high-sugar snacks, and salty processed foods should not become daily habits.",
    ]);
    renderList(actionList, ["Calculate your BMI to get more specific next steps."]);
    renderList(watchList, [
      "BMI is only a reference. Waist size, body fat, activity level, and health history also matter.",
    ]);
    return;
  }

  const bmi = measurements.weightKg / measurements.heightM ** 2;
  updateResult(bmi, measurements.heightM);
});

unitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveUnit(button.dataset.unit);
  });
});

dailyChecklist.addEventListener("change", updateDailyChecklist);
resetWeekly.addEventListener("click", () => {
  localStorage.removeItem(getWeeklyStorageKey());
  renderWeeklyTracker();
});
calculateWater.addEventListener("click", showWaterGoal);
checkWaist.addEventListener("click", showWaistRisk);
clearHistory.addEventListener("click", () => {
  localStorage.removeItem("bmiHistory");
  renderHistory();
});

function setActiveUnit(unit) {
  activeUnit = unit;

  unitButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.unit === unit);
  });

  const isMetric = unit === "metric";
  heightMetricField.classList.toggle("hidden", !isMetric);
  heightImperialField.classList.toggle("hidden", isMetric);
  heightInput.required = isMetric;
  heightFeetInput.required = !isMetric;
  weightUnit.textContent = isMetric ? "kg" : "lb";
  weightInput.placeholder = isMetric ? "e.g. 65" : "e.g. 150";
  weightInput.min = isMetric ? "10" : "22";
  weightInput.max = isMetric ? "400" : "880";
  weightInput.value = "";
  waistUnit.textContent = isMetric ? "cm" : "in";
  waistInput.placeholder = isMetric ? "e.g. 80" : "e.g. 32";
  waistInput.min = isMetric ? "40" : "15";
  waistInput.max = isMetric ? "200" : "80";
  waistInput.value = "";

  bmiValue.textContent = "--";
  bmiCategory.textContent = "Waiting for input";
  healthyRange.textContent = "--";
  weeklyGoal.textContent = "Calculate BMI first";
  weeklyGoalDetail.textContent = "Your result will unlock a small goal that is easier to follow.";
  weeklyTrackerTitle.textContent = "Calculate your BMI to receive a 7-day goal.";
  activeWeeklyGoal = "Calculate BMI first";
  waterResult.textContent = "--";
  waistResult.textContent = "Choose gender and enter waist size to see a reference note.";
  scaleMarker.style.left = "0";
  renderWeeklyTracker();
}

function getMeasurements() {
  const weight = Number(weightInput.value);

  if (!weight || weight <= 0) {
    return null;
  }

  if (activeUnit === "metric") {
    const heightCm = Number(heightInput.value);

    if (!heightCm || heightCm <= 0) {
      return null;
    }

    return {
      heightM: heightCm / 100,
      weightKg: weight,
    };
  }

  const feet = Number(heightFeetInput.value);
  const inches = Number(heightInchesInput.value || 0);
  const totalInches = feet * 12 + inches;

  if (!feet || feet <= 0 || inches < 0 || totalInches <= 0) {
    return null;
  }

  return {
    heightM: totalInches * 0.0254,
    weightKg: weight * 0.45359237,
  };
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function updateDailyChecklist() {
  const checkedValues = [...dailyChecklist.querySelectorAll("input:checked")].map(
    (input) => input.value,
  );
  localStorage.setItem(
    `dailyChecklist:${getTodayKey()}`,
    JSON.stringify(checkedValues),
  );

  const totalItems = dailyChecklist.querySelectorAll("input").length;
  dailyProgressText.textContent = `Completed ${checkedValues.length}/${totalItems} today`;
  dailyProgressBar.style.width = `${(checkedValues.length / totalItems) * 100}%`;
}

function loadDailyChecklist() {
  const savedValues = JSON.parse(
    localStorage.getItem(`dailyChecklist:${getTodayKey()}`) || "[]",
  );

  dailyChecklist.querySelectorAll("input").forEach((input) => {
    input.checked = savedValues.includes(input.value);
  });

  updateDailyChecklist();
}

function getWeeklyStorageKey() {
  return `weeklyTracker:${activeWeeklyGoal}`;
}

function renderWeeklyTracker() {
  const savedDays = JSON.parse(localStorage.getItem(getWeeklyStorageKey()) || "[]");
  dayTracker.innerHTML = "";

  for (let day = 1; day <= 7; day += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `D${day}`;
    button.classList.toggle("done", savedDays.includes(day));
    button.addEventListener("click", () => {
      toggleWeeklyDay(day);
    });
    dayTracker.appendChild(button);
  }
}

function toggleWeeklyDay(day) {
  const key = getWeeklyStorageKey();
  const savedDays = JSON.parse(localStorage.getItem(key) || "[]");
  const nextDays = savedDays.includes(day)
    ? savedDays.filter((savedDay) => savedDay !== day)
    : [...savedDays, day];

  localStorage.setItem(key, JSON.stringify(nextDays));
  renderWeeklyTracker();
}

function showWaterGoal() {
  const weightKg = getWeightKg();

  if (!weightKg) {
    waterResult.textContent =
      activeUnit === "metric"
        ? "Enter a valid weight first, such as 65kg."
        : "Enter a valid weight first, such as 150lb.";
    return;
  }

  const minLiters = (weightKg * 30) / 1000;
  const maxLiters = (weightKg * 35) / 1000;
  waterResult.textContent = `${minLiters.toFixed(1)}L - ${maxLiters.toFixed(1)}L / day`;
}

function getWeightKg() {
  const weight = Number(weightInput.value);

  if (!weight || weight <= 0) {
    return null;
  }

  return activeUnit === "metric" ? weight : weight * 0.45359237;
}

function showWaistRisk() {
  const sex = document.querySelector("#sex").value;
  const waistValue = Number(waistInput.value);

  if (!waistValue || waistValue <= 0) {
    waistResult.textContent = "Enter a valid waist size.";
    return;
  }

  if (!sex || sex === "other") {
    waistResult.textContent =
      "Waist reference thresholds are usually interpreted with male or female categories. You can still use waist size as a monthly trend marker.";
    return;
  }

  const waistInches = activeUnit === "metric" ? waistValue / 2.54 : waistValue;
  const threshold = sex === "male" ? 40 : 35;
  const label = sex === "male" ? "Male" : "Female";

  if (waistInches > threshold) {
    waistResult.textContent = `${label} waist size is above the ${threshold}in reference line. This may suggest higher abdominal fat and metabolic risk. Consider interpreting it with BMI, blood pressure, blood sugar, and professional advice.`;
    return;
  }

  waistResult.textContent = `${label} waist size is not above the ${threshold}in reference line. Keep watching the trend, activity habits, and food quality.`;
}

function saveBmiHistory(bmi, categoryName) {
  const history = JSON.parse(localStorage.getItem("bmiHistory") || "[]");
  const today = new Date().toLocaleDateString("en-US");
  const nextHistory = [
    {
      bmi: bmi.toFixed(1),
      category: categoryName,
      unit: activeUnit === "metric" ? "cm/kg" : "ft/in/lb",
      date: today,
    },
    ...history,
  ].slice(0, 5);

  localStorage.setItem("bmiHistory", JSON.stringify(nextHistory));
}

function renderHistory() {
  const history = JSON.parse(localStorage.getItem("bmiHistory") || "[]");
  historyList.innerHTML = "";

  if (!history.length) {
    const item = document.createElement("li");
    item.textContent = "Your latest 5 BMI results will appear here.";
    historyList.appendChild(item);
    return;
  }

  history.forEach((entry) => {
    const item = document.createElement("li");
    item.textContent = `${entry.date}: BMI ${entry.bmi} (${entry.category}, ${entry.unit})`;
    historyList.appendChild(item);
  });
}

loadDailyChecklist();
renderWeeklyTracker();
renderHistory();
