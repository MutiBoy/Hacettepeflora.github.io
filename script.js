
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript dosyası başarıyla yüklendi!");
    
    const searchInput = document.getElementById("search");
    if (searchInput) {
        searchInput.addEventListener("input", function() {
            const filter = searchInput.value.toLowerCase();
            const plantItems = document.querySelectorAll(".plant-item");
            plantItems.forEach(function(item) {
                const text = item.textContent.toLowerCase();
                if (text.includes(filter)) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
            });
        });
    }
});
