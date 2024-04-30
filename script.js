// اختيار جميع الأزرار
const buttons = document.querySelectorAll('button');

// العنصر لعرض المجموع
const sumElement = document.getElementById('sum');

// دالة لجمع قيم الأرقام داخل الأزرار
function calculateSum() {
    let sum = 0;
    buttons.forEach(button => {
        sum += parseInt(button.querySelector('.counter').textContent);
    });
    return sum;
}

// تحديث عرض المجموع
function updateSum() {
    const sum = calculateSum();
    sumElement.textContent = sum;
}

// إضافة معالج الحدث لكل زر لتحديث المجموع عند النقر على الزر
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const counter = button.querySelector('.counter');
        let count = parseInt(counter.textContent);
        count++;
        counter.textContent = count;
        updateSum();
    });
});

// تحديث المجموع عند تحميل الصفحة
updateSum();
