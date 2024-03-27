const planckConstant = 6.62607015e-34; // Planck constant (J⋅s)
const speedOfLight = 299792458; // Speed of light (m/s)
const electronCharge = 1.602176634e-19; // Electron charge (C)

function convert() {
    const electronvolt = parseFloat(document.getElementById('input1').value);
    const wavelength = parseFloat(document.getElementById('input2').value);
    const hartree = parseFloat(document.getElementById('input3').value);
    const kcalmol = parseFloat(document.getElementById('input4').value);
    const kJmol = parseFloat(document.getElementById('input5').value);
    const cm = parseFloat(document.getElementById('input6').value);
    const K = parseFloat(document.getElementById('input7').value);
    const C = parseFloat(document.getElementById('input8').value);

    if (!isNaN(electronvolt) && electronvolt > 0) {
        // eV to others
        // const eV_nm = (planckConstant * speedOfLight) / (electronvolt * electronCharge * 1e-9);
        const eV_nm = 1239.8419843320025 / electronvolt;
        const eV_Hartree = electronvolt / 27.211386245988;
        const eV_kcalmol = electronvolt * 23.060547830619026;
        const eV_kJmol = electronvolt * 96.48533212331;
        const eV_cm = electronvolt * 8065.543937349212;
        const eV_K = electronvolt * 11604.518121550082;
        const eV_C = eV_K - 273.15;
        document.getElementById('input2').value = eV_nm.toFixed(7);
        document.getElementById('input3').value = eV_Hartree.toFixed(7);
        document.getElementById('input4').value = eV_kcalmol.toFixed(7);
        document.getElementById('input5').value = eV_kJmol.toFixed(7);
        document.getElementById('input6').value = eV_cm.toFixed(7);
        document.getElementById('input7').value = eV_K.toFixed(7);
        document.getElementById('input8').value = eV_C.toFixed(7);

    } else if (!isNaN(wavelength) && wavelength > 0) {
        // wavelength to others
        // const nm_eV = (planckConstant * speedOfLight) / (wavelength * electronCharge * 1e-9);
        const nm_eV = 1239.8419843320025 / wavelength;
        const nm_Hartree = nm_eV / 27.211386245988;
        const nm_kcalmol = nm_eV * 23.060547830619026;
        const nm_kJmol = nm_eV * 96.48533212331;
        const nm_cm = nm_eV * 8065.543937349212;
        const nm_K = nm_eV * 11604.518121550082;
        const nm_C = nm_K - 273.15;
        document.getElementById('input1').value = nm_eV.toFixed(7);
        document.getElementById('input3').value = nm_Hartree.toFixed(7);
        document.getElementById('input4').value = nm_kcalmol.toFixed(7);
        document.getElementById('input5').value = nm_kJmol.toFixed(7);
        document.getElementById('input6').value = nm_cm.toFixed(7);
        document.getElementById('input7').value = nm_K.toFixed(7);
        document.getElementById('input8').value = nm_C.toFixed(7);

    } else if (!isNaN(hartree) && hartree > 0) {
        // Hartree to others
        const hartree_eV = hartree * 27.211386245988;
        const hartree_nm = 1239.8419843320025 / hartree_eV;
        const hartree_kcalmol = hartree_eV * 23.060547830619026;
        const hartree_kJmol = hartree_eV * 96.48533212331;
        const hartree_cm = hartree_eV * 8065.543937349212;
        const hartree_K = hartree_eV * 11604.518121550082;
        const hartree_C = hartree_K - 273.15;
        document.getElementById('input1').value = hartree_eV.toFixed(7);
        document.getElementById('input2').value = hartree_nm.toFixed(7);
        document.getElementById('input4').value = hartree_kcalmol.toFixed(7);
        document.getElementById('input5').value = hartree_kJmol.toFixed(7);
        document.getElementById('input6').value = hartree_cm.toFixed(7);
        document.getElementById('input7').value = hartree_K.toFixed(7);
        document.getElementById('input8').value = hartree_C.toFixed(7);

    } else if (!isNaN(kcalmol) && kcalmol > 0) {
        // kcal/mol to others
        const kcalmol_eV = kcalmol * 0.04336410424180094;
        const kcalmol_nm = 1239.8419843320025 / kcalmol_eV;
        const kcalmol_hartree = kcalmol_eV / 27.211386245988;
        const kcalmol_kJmol = kcalmol * 4.184;
        const kcalmol_cm = kcalmol_eV * 8065.543937349212;
        const kcalmol_K = kcalmol_eV * 11604.518121550082;
        const kcalmol_C = kcalmol_K - 273.15;
        document.getElementById('input1').value = kcalmol_eV.toFixed(7);
        document.getElementById('input2').value = kcalmol_nm.toFixed(7);
        document.getElementById('input3').value = kcalmol_hartree.toFixed(7);
        document.getElementById('input5').value = kcalmol_kJmol.toFixed(7);
        document.getElementById('input6').value = kcalmol_cm.toFixed(7);
        document.getElementById('input7').value = kcalmol_K.toFixed(7);
        document.getElementById('input8').value = kcalmol_C.toFixed(7);

    } else if (!isNaN(kJmol) && kJmol > 0) {
        // kJ/mol to others
        const kJmol_eV = kJmol * 0.010364269656262175;
        const kJmol_nm = 1239.8419843320025 * kJmol_eV;
        const kJmol_hartree = kJmol_eV / 27.211386245988;
        const kJmol_kcalmol = kJmol * 0.2390057361376673;
        const kJmol_cm = kJmol_eV * 8065.543937349212;
        const kJmol_K = kJmol_eV * 11604.518121550082;
        const kJmol_C = kJmol_K - 273.15;
        document.getElementById('input1').value = kJmol_eV.toFixed(7);
        document.getElementById('input2').value = kJmol_nm.toFixed(7);
        document.getElementById('input3').value = kJmol_hartree.toFixed(7);
        document.getElementById('input4').value = kJmol_kcalmol.toFixed(7);
        document.getElementById('input6').value = kJmol_cm.toFixed(7);
        document.getElementById('input7').value = kJmol_K.toFixed(7);
        document.getElementById('input8').value = kJmol_C.toFixed(7);

    } else if (!isNaN(cm) && cm > 0) {
        // cm^-1 to others
        const cm_eV = cm * 0.00012398419843320026;
        const cm_nm = 1239.8419843320025 / cm_eV;
        const cm_hartree = cm_eV / 27.211386245988;
        const cm_kcalmol = cm_eV * 23.060547830619026;
        const cm_kJmol = cm_eV * 96.48533212331;
        const cm_K = cm_eV * 11604.518121550082;
        const cm_C = cm_K - 273.15;
        document.getElementById('input1').value = cm_eV.toFixed(7);
        document.getElementById('input2').value = cm_nm.toFixed(7);
        document.getElementById('input3').value = cm_hartree.toFixed(7);
        document.getElementById('input4').value = cm_kcalmol.toFixed(7);
        document.getElementById('input5').value = cm_kJmol.toFixed(7);
        document.getElementById('input7').value = cm_K.toFixed(7);
        document.getElementById('input8').value = cm_C.toFixed(7);

    } else if (!isNaN(K) && K > 0) {
        // K to others
        const K_eV = K * 8.617333262145179e-05;
        const K_nm = 1239.8419843320025 / K_eV;
        const K_hartree = K_eV / 27.211386245988;
        const K_kcalmol = K_eV * 23.060547830619026;
        const K_kJmol = K_eV * 96.48533212331;
        const K_cm = K_eV * 8065.543937349212;
        const K_C = K - 273.15;
        document.getElementById('input1').value = K_eV.toFixed(7);
        document.getElementById('input2').value = K_nm.toFixed(7);
        document.getElementById('input3').value = K_hartree.toFixed(7);
        document.getElementById('input4').value = K_kcalmol.toFixed(7);
        document.getElementById('input5').value = K_kJmol.toFixed(7);
        document.getElementById('input6').value = K_cm.toFixed(7);
        document.getElementById('input8').value = K_C.toFixed(7);

    } else if (!isNaN(C) && C >= -273.15) {
        // C to others
        const C_K = C + 273.15;
        const C_eV = C_K * 8.617333262145179e-05;
        const C_nm = 1239.8419843320025 / C_eV;
        const C_hartree = C_eV / 27.211386245988;
        const C_kcalmol = C_eV * 23.060547830619026;
        const C_kJmol = C_eV * 96.48533212331;
        const C_cm = C_eV * 8065.543937349212;
        document.getElementById('input1').value = C_eV.toFixed(7);
        document.getElementById('input2').value = C_nm.toFixed(7);
        document.getElementById('input3').value = C_hartree.toFixed(7);
        document.getElementById('input4').value = C_kcalmol.toFixed(7);
        document.getElementById('input5').value = C_kJmol.toFixed(7);
        document.getElementById('input6').value = C_cm.toFixed(7);
        document.getElementById('input7').value = C_K.toFixed(7);

    } else {
        alert('Please enter a valid positive number for either the electronvolt or the wavelength value.');
    }
}

function clearFields() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('input3').value = '';
    document.getElementById('input4').value = '';
    document.getElementById('input5').value = '';
    document.getElementById('input6').value = '';
    document.getElementById('input7').value = '';
    document.getElementById('input8').value = '';
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        convert();
    } else if (event.key === 'x') {
        clearFields();
    }
}