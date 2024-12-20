// الحالات الأولية
let powerStatus = false; // التكييف مغلق في البداية
let fanSpeed = 1; // سرعة المروحة تبدأ بـ 1
let temperature = 16; // درجة الحرارة تبدأ بـ 16

// هنجيب عناصر HTML
const powerStatusElem = document.getElementById("power-status");
const fanSpeedElem = document.getElementById("fan-speed");
const temperatureElem = document.getElementById("temperature");

// زرار تشغيل/إيقاف التكييف
document.getElementById("toggle-power").addEventListener("click", () => {
  powerStatus = !powerStatus; // تبديل حالة التكييف
  powerStatusElem.textContent = `الحالة: ${powerStatus ? "مفتوح" : "مغلق"}`;
});

// زرار تغيير سرعة المروحة
document.getElementById("change-fan-speed").addEventListener("click", () => {
  if (!powerStatus) return alert("يجب تشغيل التكييف أولاً!"); // التأكد من أن التكييف يعمل
  fanSpeed = fanSpeed === 3 ? 1 : fanSpeed + 1; // زيادة السرعة أو العودة لـ 1
  fanSpeedElem.textContent = `سرعة المروحة: ${fanSpeed}`;
});

// زرار تغيير درجة الحرارة
document.getElementById("change-temperature").addEventListener("click", () => {
  if (!powerStatus) return alert("يجب تشغيل التكييف أولاً!"); // التأكد من أن التكييف يعمل
  temperature = temperature === 29 ? 16 : temperature + 1; // زيادة الحرارة أو العودة لـ 16
  temperatureElem.textContent = `درجة الحرارة: ${temperature}°م`;
});
