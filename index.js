
const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];
    
  // 1. Vypište do stránky všechna čísla
  document.body.innerHTML += `<p>1) Všechna čísla: ${numbers}</p>`;

  // 2. Vypište do stránky druhé mocniny všech čísel
  const squares = numbers.map(n => n * n);

  document.body.innerHTML += `<p>2) Druhé mocniny ${squares}</p>`;
  
  // 3. Vypište do stránky pouze záporná čísla
  const negativeNumbers = numbers.filter(n => n < 0);
  
  document.body.innerHTML += `<p>3) Záporná čísla: ${negativeNumbers}</p>`;
  
  // 4. Vypište do stránky absolutní hodnotu všech čísel
  const absoluteValues = numbers.map(n => Math.abs(n));
  
  document.body.innerHTML += `<p>4) Absolutní hodnoty: ${absoluteValues}</p>`;
  
  // 5. Vypište do stránky pouze sudá čísla
  const evenNumbers = numbers.filter(n => n % 2 === 0);
 
  document.body.innerHTML += `<p>5) Sudá čísla: ${evenNumbers}</p>`;
  
  // 6. Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi  
  const divisibleByThree = numbers.filter(n => Math.abs(n) % 3 === 0);

  document.body.innerHTML += `<p>6) Absolutní hodnota dělitelná 3: ${divisibleByThree}</p>`;
  
  // 7a. Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5
  const distancesFromFive = numbers.map(n => Math.abs(n - 5));
  
  document.body.innerHTML += `<p>7a) Vzdálenosti od 5: ${distancesFromFive}</p>`;

  // 7b. Vzdálenost od čísla 5 v poli dle indexu
  const indexOfFive = numbers.indexOf(5);
  const indexDistances = numbers.map((n, i) => Math.abs(i - indexOfFive));
  
  document.body.innerHTML += `<p>7b) Vzdálenosti od 5 v poli: ${indexDistances}</p>`;

  // 8a. Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5
  const squaredDistances = distancesFromFive.map(d => d * d);
 
  document.body.innerHTML += `<p>8a) Mocniny vzdáleností od 5: ${squaredDistances}</p>`;

  //8b. Druhé mocniny vzdáleností od 5 v poli dle indexu
  const squaredIndexDistances = indexDistances.map(d => d * d);
  
  document.body.innerHTML += `<p>8b) Mocniny vzdáleností od 5 v poli: ${squaredIndexDistances}</p>`;

  // 9. Spočítejte, kolik je v seznamu záporných čísel
  const negativeCount = negativeNumbers.length;

  document.body.innerHTML += `<p>9) Počet záporných čísel: ${negativeCount}</p>`;
  
  // 10. Spočítejte součet všech čísel v poli
  let sum = 0;
  numbers.forEach(n => {
    sum += n;
  });

  document.body.innerHTML += `<p>10) Součet všech čísel: ${sum}</p>`;
  
  // 11. Spočítejte průměr všech čísel v poli
  const average = sum / numbers.length;

  document.body.innerHTML += `<p>11) Průměr čísel: ${average}</p>`;
  
  // 12. Spočítejte součet všech kladných čísel v poli
  let positiveNumberSum = 0;
  numbers.forEach(n => {
    if (n > 0) { 
      positiveNumberSum += n;  
    }
  });

  document.body.innerHTML += `<p>12) Součet kladných čísel: ${positiveNumberSum}</p>`; 

  //zde by se dala využít také varianta s metodou .filter jako v případě bodu 3 :) 

