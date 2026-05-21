function loadPDFTemplate() {
    // Cek apakah berjalan di lingkungan Google Apps Script
    if (typeof google !== 'undefined' && google.script && google.script.run) {
        
        // Memanggil fungsi di Kode.gs untuk mengambil teks template.html
        google.script.run
            .withSuccessHandler(function(htmlText) {
                const iframe = document.getElementById('pdf-sandbox');
                if (iframe) {
                    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                    iframeDoc.open();
                    iframeDoc.write(htmlText);
                    iframeDoc.close();
                    console.log("Template berhasil dimasukkan ke dalam iframe sandbox via Apps Script.");
                } else {
                    console.error("Eror: Elemen id 'pdf-sandbox' tidak ditemukan!");
                }
            })
            .withFailureHandler(function(err) {
                console.error("Gagal mengambil template via backend:", err);
            })
            .getTemplateHtml(); // Nama fungsi backend di Kode.gs
            
    } else {
        // Fallback jika ditest di lokal / browser biasa (Tetap pakai fetch lama agar tidak eror)
        fetch('template.html')
            .then(response => response.text())
            .then(html => {
                const iframe = document.getElementById('pdf-sandbox');
                if (iframe) {
                    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                    iframeDoc.open();
                    iframeDoc.write(html);
                    iframeDoc.close();
                }
            })
            .catch(err => console.warn("Fetch lokal gagal (Abaikan jika di Apps Script):", err));
    }
}