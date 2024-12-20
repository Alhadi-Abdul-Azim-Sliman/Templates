// الحالة الأولية للتكييف
let ac = {
  isOn: false, // حالة التكييف
  fanSpeed: 1, // سرعة المروحة (1 - 3)
  temperature: 16, // درجة الحرارة (16 - 29)
};

// زر 1: تشغيل/إيقاف التكييف
function toggleAC() {
  ac.isOn = !ac.isOn;
  alert(`التكييف ${ac.isOn ? "مفتوح" : "مغلق"}`);
}

// زر 2: تغيير سرعة المروحة
function changeFanSpeed() {
  if (ac.isOn) {
      ac.fanSpeed = (ac.fanSpeed % 3) + 1;
      alert(`سرعة المروحة الآن: ${ac.fanSpeed}`);
  } else {
      alert("لا يمكن تغيير سرعة المروحة. التكييف مغلق.");
  }
}

// زر 3: تغيير درجة الحرارة
function changeTemperature() {
  if (ac.isOn) {
      ac.temperature++;
      if (ac.temperature > 29) {
          ac.temperature = 16; // إعادة ضبط الحرارة إلى 16 عند الوصول إلى 30
      }
      alert(`درجة الحرارة الآن: ${ac.temperature}°C`);
  } else {
      alert("لا يمكن تغيير درجة الحرارة. التكييف مغلق.");
  }
}

// دالة للتحكم في الاختيار
function controlAC() {
  let choice;
  do {
      choice = prompt(
          "اختر زرًا لتنفيذ العملية:\n1- تشغيل/إيقاف التكييف\n2- تغيير سرعة المروحة\n3- تغيير درجة الحرارة\n0- خروج"
      );
      switch (choice) {
          case "1":
              toggleAC();
              break;
          case "2":
              changeFanSpeed();
              break;
          case "3":
              changeTemperature();
              break;
          case "0":
              alert("تم الخروج من البرنامج.");
              break;
          default:
              alert("اختيار غير صحيح. حاول مرة أخرى.");
      }
  } while (choice !== "0");
}

// بدء البرنامج
controlAC();
