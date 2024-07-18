AOS.init();

const dataEvento = new Date("May 25, 2025 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteOEvento = timeStampEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(tempoAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((tempoAteOEvento %  diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((tempoAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((tempoAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML  = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    if (tempoAteOEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'Foi uma grande festa!';
    }
}, 1000);