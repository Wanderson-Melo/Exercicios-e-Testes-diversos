programa
{
	
	funcao inicio()
	{
		inteiro menu = 0
		//Menu de seleção
		escreva(
		"Selecione sua opção:"
		+ "\n" +
		"1 - NetFlix"
		+ "\n" +
		"2 - Amazon Prime"
		+ "\n" +
		"3 - HBO GO"
		+ "\n" +
		"4 - Sair"
		+ "\n" + "\n")
		faca{
		leia(menu)

		escolha(menu)
		{
		caso 1:
		escreva("\n" + "Ok, abrindo NetFlix")	
		pare
		caso 2:
		escreva("\n" + "Ok, abrindo Amazon Prime")	
		pare
		caso 3:
		escreva("\n" + "Ok, abrindo HBO GO")	
		pare
		caso 4:
		escreva("\n" + "Ok, não foi dessa vez :(")
		pare
		caso contrario:
		escreva("\n" + "Por favor selecione uma das opções do menu" + "\n" + "\n")
		}
		}enquanto(menu!=1,2,3,4)
		escreva("\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 259; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */