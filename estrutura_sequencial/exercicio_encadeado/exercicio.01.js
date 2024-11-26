let hrbrasil, horafra

hrbrasil = parseInt(prompt("Digite a hora no Brasil que eu vou dizer qual é a hora na França"))

horafra = hrbrasil + 5

if (horafra >= 24) {
    horafra -= 24
    document.write(`A hora da Brasil é: ${hrbrasil} e a hora da frança é: ${horafra}`)
} else {
    document.write(`A hora da Brasil é: ${hrbrasil} e a hora da frança é: ${horafra}`)
}
