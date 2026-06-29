const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(function (checkbox) {
    const salvo = localStorage.getItem(checkbox.id);
    if (salvo === 'true') {
        checkbox.checked = true;
    }

    checkbox.addEventListener('change', function () {
        localStorage.setItem(checkbox.id, checkbox.checked);
    });
});