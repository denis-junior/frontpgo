import { Page, Text, View, Document } from "@react-pdf/renderer";
import { styles } from "./Style";

const ContractPdf = () => (
  <Document>
    <Page size="A4" style={styles.page} >
      <View style={styles.boxTitle}>
        <Text style={styles.titleOne}>
          CONTRATO DE LICENÇA DE USO DE SOFTWARE E SUPORTE TÉCNICO
        </Text>
      </View>
      <View style={styles.boxTitlePreambulo}>
        <Text style={styles.preambulo}>I . PREÂMBULO</Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>
            LICENCIANTE: DRCLICK TECNOLOGIA LTDA
          </Text>
          , pessoa jurídica de direito privado, inscrita no
          CNPJsobonº45.836.975/0001-92, com sede na Rua Almirante Barroso n 4820
          Bairro Souza CEP 66093-020Belém-PA,representante legal: Marcio Pereira
          Bitencourte CPF 825.345.940-87, doravante denominada LICENCIANTE
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>LICENCIADO: POLICLÍNICA ITAMBÉ</Text>,
          pessoa jurídica de direito privada inscrita no
          CNPJsobn°18.630.934/0001-72, com sede em Rua Eliud Falcao, 79, Itambé,
          PE, pelo seu representante legal: DiegoDoreFalcao, doravante
          denominada LICENCIADO
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Considerando </Text>
          que a Licenciante é uma pessoa jurídica que desenvolve programa de
          computador voltadoàgestão clínicas da área da saúde, programa este
          doravante chamado de <Text style={styles.boldText}>DRCLICK</Text> e,
          sob licença de uso, ministra treinamento de uso e suporte técnico;
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Considerando </Text>que o Licenciado é
          uma pessoa jurídica prestadora de serviços na área da saúde,
          nosegmentode Clínicas Médicas e afins, necessitando da utilização de
          software que se constitua numsistema integradodegestão de clínica, o
          qual contemple o gerenciamento dos módulos de agendamento,
          financeiroecontábil,gerencial, relatorios, usuarios e cargos,
          prontuario medico e convenios medicos (operadoras de saúde), além de
          hospedar e manter os dados gerados no sistema em nuvem;
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Concede </Text>a Licenciante, mediante
          os termos do presente instrumento, conceda ao Licenciado,a
          licençanãoexclusiva e temporária de uso e acesso do programa de
          computador de propriedade da Licenciante, oradenominado{" "}
          <Text style={styles.boldText}>DRCLICK </Text>em sua versão atual e
          posteriores, o qual é protegido pelas leis de copyright,
          tratadosinternacionais, leis e tratados sobre propriedade intelectual,
          bem como documentos técnicos que o acompanhem,tudo na melhor forma do
          direito e na conformidade dos termos e condições abaixo:
        </Text>
      </View>
      <View style={styles.boxTitlePreambulo}>
        <Text style={styles.preambulo}>A. DO DETALHAMENTO DO OBJETO</Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Primeira: </Text>A Licenciante
          concederá ao Licenciado licença não exclusiva e temporária de uso do
          software <Text style={styles.boldText}>DRCLICK</Text>, o qual se
          constitui num sistema integrado de gestão da clínica Licenciada,
          contemplandoogerenciamento dos módulos de agendamento, financeiro e
          contábil, gerencial, relatorios, usuarios ecargos,prontuario medico e
          convenios medicos (operadoras de saúde) além de hospedar e manter os
          dados geradosnosistema em nuvem, disponibilizando a consulta e a
          atualização desses dados por meio da rede internet.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Primeiro</Text>: A Licenciante
          se compromete a fornecer o acesso ao sistema do
          <Text style={styles.boldText}>DRCLICK </Text>em nuvem,mediante
          fornecimento de login e senha acesso ao software{" "}
          <Text style={styles.boldText}>DRCLICK </Text>pelos computadores do
          Licenciado, bem como se compromete a treinar o pessoal do Licenciado
          para o uso do sistema, comprometendo-se oLicenciado,por seu turno e às
          suas expensas, a disponibilizar maquinário apto a ter acesso ao{" "}
          <Text style={styles.boldText}>DRCLICK </Text> e suas versões de
          atualização.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Segundo</Text>: Constitui
          ainda objeto da presente contratação o suporte técnico por parte da
          Licenciante,nos termos deste contrato.
        </Text>
      </View>
      <View style={styles.boxTitlePreambulo}>
        <Text style={styles.preambulo}>
          B. DA INSTALAÇÃO, ATUALIZAÇÃO E SUPORTE TÉCNICO
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Segunda</Text>: Tendo em vista
          se tratar de software que hospeda e armazena dados em nuvem, é
          desnecessária a instalação do DRCLICK nos computadores do Licenciado,
          de forma que o acesso se dá mediante login e senha inicialmente
          fornecidos pela Licenciante.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Primeiro</Text>: O login e
          senha de acesso ao DRCLICK será liberado após a parametrização e
          configuração das planilhas de importações de serviços prestados na
          clínica.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Terceira</Text>: Uma vez que o
          software roda em ambiente virtual, são requisitos mínimos para o bom
          funcionamento do sistema a utilização de um computador dedicado para o
          seu uso, com ponto de internet exclusivo e velocidade de conexão não
          inferior a 30 megabytes (a qual poderá ser aferida a qualquer momento
          através de consulta a, no mínimo, 03 (três) websites públicos para
          aferição de sinal de internet).
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo primeiro</Text>: Ainda, para o
          melhor desempenho do software, é recomendada a utilização dos
          navegadores de internet como Google Chrome ou Mozilla Firefox, ficando
          o Licenciado desde já ciente que a utilização concomitante do
          computador que contenham plug-ins de bancos instalados ou outros
          sistemas de proteção poderá comprometer o seu funcionamento.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo segundo</Text>: A não
          observância dos requisitos acima elencados poderá trazer instabilidade
          à utilização normal do software e isenta a Licenciante de
          responsabilização dos prejuízos daí decorrentes.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Quarta</Text>: Por atualização
          se entende o lançamento, pela Licenciante, de qualquer nova versão do{" "}
          <Text style={styles.boldText}>DRCLICK </Text>criada por necessidade
          legal, correção de erros ou aperfeiçoamento/modernização do produto,
          aqual poderá ser disponibilizada automaticamente para acesso via
          internet do Licenciado.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Primeiro</Text>: Caso o
          Licenciado pretenda a implantação de alguma ferramenta específica no{" "}
          <Text style={styles.boldText}>DRCLICK</Text>,o desenvolvimento dessa
          ferramenta será precedido de expressa concordância da Licenciante,
          aqual orçaráocusto para o Licenciado, bem como fará o estudo de
          viabilidade técnica e, se concluir pela possibilidadedessaimplantação,
          será a detentora da propriedade da ferramenta criada, não cabendo ao
          Licenciado nenhuma indenização ou contraprestação. Fica estabelecido o
          valor unitário de R$ 100,00 / hora (Cento e vinte reais por hora) para
          dimensionamento de novas demandas evolutivas no Sistema.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Segundo</Text>: Caso o
          Licenciado desista do desenvolvimento e implantação da nova ferramenta
          por ele solicitado, fica estabelecido que nenhum reembolso haverá,
          servindo a quantia até então desembolsada como indenização em favor da
          Licenciante pelo investimento e desenvolvimento.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Terceiro</Text>: A Licenciante
          poderá negar o desenvolvimento de qualquer nova ferramenta solicitada
          pelo Licenciado que possa ferir direito de terceiros ou interferir no
          bom funcionamento do sistema
          <Text style={styles.boldText}>DRCLICK</Text>.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Quinta</Text>: A Licenciante
          deve manter um serviço de suporte via telefone, chat online via
          Whatsapp ou e-mail disponível ao Licenciado para o esclarecimento de
          dúvidas sobre a utilização do sistema, bem como para a execução de
          tarefas de carater corretivo ou não sobre seus dados. Este serviço de
          suporte deveráestardisponível de segunda à sexta das 08h às 12h e das
          14h às 18h e sabado das 08h às 12h, exceto feriados.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Primeiro</Text>: A Licenciante
          prestará o serviço de suporte, acima no que se refere ao funcionamento
          e utilização do <Text style={styles.boldText}>DRCLICK </Text>ficando
          expressamente excluído qualquer espécie de suporte relativo a outros
          programas de computador e/ou a maquinário físico.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Segundo</Text>: A Licenciante
          colocará em prática todos os esforços para providenciar imediata
          resposta e/ou solução de problema do{" "}
          <Text style={styles.boldText}>DRCLICK </Text>para o Licenciado,
          ficando estabelecido que, na impossibilidade de solução imediata, o
          prazo de resposta será de até 24 horas úteis após o registro e
          formalização de chamadoviae-mail.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Terceiro</Text>: Eventuais
          “bugs", erros e/ou imperfeições detectadas pelo Licenciado, os quais
          não comprometam a utilização fundamental do Sistema, deverão ser
          informados de imediato para a Licenciante, porintermédio do endereço
          eletrônico suporte@drclick.com.br, sendo assegurado à Licenciante o
          prazo de 15 (quinze) dias úteis para o desenvolvimento da respectiva
          correção.
        </Text>
      </View>
      <View style={styles.boxTitlePreambulo}>
        <Text style={styles.preambulo}>B. DO TREINAMENTO</Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Sexta</Text>: Além do
          fornecimento de acesso ao DRCLICK, cabe à Licenciante ministrar o
          competente curso/treinamento de utilização do programa, para o
          Licenciado e/ou seus prepostos, os quais deverão ter os conhecimentos
          básicos indicados na proposta comercial.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Primeiro</Text>: O Licenciado
          deverá permitir o acesso dos prepostos da Licenciante em suas
          dependências e franquear acesso aos seus computadores, seja de forma
          presencial ou através de acesso remoto
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Sétima</Text>: O curso de
          utilização do programa terá início na mesma data do acesso ao software
          e será ministrado na sede do Licenciado, para no máximo 10 (Dez)
          pessoas, mediante agendamento prévio junto à Licenciante.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Segundo</Text>: O treinamento
          será realizado sempre de segunda a sexta-feira, em horário
          compreendido entre as 9:00 horas às 18:00 horas, com intervalo de 1
          (uma) hora para alimentação e repouso dos prepostos da Licenciante
          conforme determina a legislação do Trabalho, e terá duração de 16
          (dezesseis) horas/aula distribuídas em dois (dois) dias.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Terceiro</Text>: Uma vez
          agendado o treinamento este será considerado ministrado no prazo acima
          estipulado, o que se dará igualmente na hipótese do Licenciado vir a
          interromper ou cancelar o mesmo durante o decorrer dos trabalhos.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Oitava</Text>: Posteriormente,
          caso o Licenciado desejar o recebimento de treinamento extravia acesso
          remoto através de programas como Meet, Whatsapp ou ferramentas
          similares, este será cobrado pelo valor de R$100,00 (cento e vinte
          reais) por hora / aula.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Quarto</Text>: O treinamento
          extra acima mencionado poderá também ser ministrado presencialmente
          tal como o curso de utilização inaugural, desde que o Licenciado fique
          responsável pelas despesas extras com traslado, transporte e
          hospedagem, quando eventualmente necessários.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Quinto</Text>: Eventual
          cancelamento e/ou reagendamento do treinamento na sede do (a)
          Licenciado(a),por iniciativa deste, implicará no pagamento equivalente
          ao valor de R$ 100,00 por hora/aula, a título de reembolso de
          deslocamento do técnico, salvo se o fizer com no mínimo 7 dias de
          antecedência.
        </Text>
      </View>
      <View style={styles.boxTitlePreambulo}>
        <Text style={styles.preambulo}>C. DA CONTRAPRESTAÇÃO PECUNIÁRIA</Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Nona</Text>: Pela licença de
          uso do software <Text style={styles.boldText}>DRCLICK </Text>o
          Licenciado pagará à Licencianteovalor deR$1.760,00 reais mensais.
          Referente ao acesso aos módulos e customizações discriminados na
          Cláusula Primeira acima para até 22 profissionais cadastrados.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Primeiro</Text>: Acordam as
          partes que o valor a ser pago para usuários adicionais ao escopo da
          Cláusula Nona será de R$80,00 reais que será aplicado imediatamente no
          valor regular da mensalidade porém com aviso previo ao Licenciado.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Primeiro</Text>: Acordam as
          partes que o valor a ser pago para usuários adicionais ao escopo da
          Cláusula Nona será de R$80,00 reais que será aplicado imediatamente no
          valor regular da mensalidade porém com aviso previo ao Licenciado.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Segundo</Text>: O pagamento
          deverá ser realizados até o décimo dia subsequente ao mês
          deusodosistema, por meio de boleto bancario ou semelhantes.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Terceiro</Text>: Se em até 5
          (cinco) dias antes do vencimento o Licenciado não receber o boleto em
          seu endereço eletrônico, este deverá informar o Licenciante que, por
          seu turno, deverá providenciar a imediata expedição de 2 a via.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Quarto</Text>: O não pagamento
          do valor estabelecido no caput até a data de vencimento importará na
          incidência de multa na razão de 10% sobre o valor do débito, além de
          juros moratórios na razão de 1% ao mês, que incidirão até a data do
          respectivo pagamento.{" "}
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Quinto</Text>: Ultrapassados 5
          (cinco) dias úteis da data do vencimento sem que o Licenciado tenha
          realizado o pagamento, a Licenciante poderá suspender o acesso do
          Licenciado ao sistema DRCLICK, independentemente de qualquer aviso
          e/ou notificação.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Sexto</Text>: O valor mensal
          previsto no caput será anualmente reajustado pelo IPCA ou, em sua
          falta, pelomaior índice oficial que o substitua.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Setimo</Text>: Fica acordado
          que não haverá pagamento referente a taxa de configuração inicial
          sistema,treinamento online e importação de dados. Define-se como
          configuração inicial a parametrização necessária para início do uso do
          sistema e ainda a carga inicial de dados (conforme planilhas padrão em
          conformidade como modelo fornecido pela LICENCIANTE). A carga de dados
          será realizada em um único evento, sendo necessária para novas
          importações a apresentação e aprovação de orçamento específico sobre o
          valor unitário de hora técnica de R$120,00.
        </Text>
      </View>
      <View style={styles.boxTitlePreambulo}>
        <Text style={styles.preambulo}>
          D. DAS DEMAIS OBRIGAÇÕES DAS PARTES
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Décima</Text>: A Licenciante é
          responsável pela realização de cópias de segurança diárias do banco de
          dados do Licenciado.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Décima Primeira</Text>: A
          Licenciante deve informar ao Licenciado número de telefone para
          atendimentos emergenciais fora do horário de funcionamento do serviço
          de suporte.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Décima Segunda</Text>: Cabe à
          Licenciante a contratação, aquisição e manutenção de todos os
          equipamentos, programas de computador e serviços necessários para
          manter o serviço online objeto deste contrato em seu devido
          funcionamento.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Décima Terceira</Text>: Cabe ao
          Licenciado a contratação, aquisição e manutenção de todos os
          equipamentos, programas de computador e serviços necessários para
          manter o(s) seu(s) computador (es)conectado(s) à Rede Internet e com
          capacidade para utilização do sistema on-line.
        </Text>
      </View>
      <View style={styles.boxTitlePreambulo}>
        <Text style={styles.preambulo}>E. DA NOVAÇÃO / TOLERÂNCIA</Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Décima Quarta</Text>: Qualquer
          omissão ou tolerância das partes, em exigir o estrito cumprimento das
          obrigações ora contratadas ou em exercer qualquer direito deste
          contrato decorrente, não constituirá novação ou renúncia, nem afetará
          o direito de qualquer parte de exercê-lo a qualquer tempo.
        </Text>
      </View>
      <View style={styles.boxTitlePreambulo}>
        <Text style={styles.preambulo}>
          F. DA SUBCONTRATAÇÃO, CESSÃO E TRANSFERÊNCIA
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Décima Quinta</Text>: A
          subcontratação, cessão ou transferência, total ou parcial, por
          qualquer uma das partes, dos direitos e obrigações contratuais, sem a
          anuência prévia e por escrito da outra, possibilitará resolução
          imediata do presente contrato.
        </Text>
      </View>
      <View style={styles.boxTitlePreambulo}>
        <Text style={styles.preambulo}>
          G. DA CONFIDENCIALIDADE E DA PROPRIEDADE INTELECTUAL
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Décima Sexta</Text>: A
          Licenciante compromete-se em respeitar permanentemente os direitos de
          propriedade intelectual dos dados do(a) Licenciado(a), mantendo acesso
          exclusivo das informações somente aos usuários do serviço de acordo
          com o perfil indicado pela empresa.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Décima Setima</Text>: O
          Licenciado poderá solicitar cópias de seus dados para qualquer que
          seja o fim, ficando a Licenciante obrigada a fornecer esta cópia,
          livre de qualquer bloqueio ou criptografia e em formato de acesso
          universal, desde que o Licenciado esteja totalmente adiplente com o
          pagamento da mensalidade.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Primeiro</Text>: A obrigação
          de guarda e armazenamento dos dados do Licenciado por parte da
          Licenciante vigorará enquanto perdurar a relação contratual entre as
          partes, devendo o Licenciado requisitar queIhe sejam liberadas estas
          cópias no ato de formalização da rescisão, sob pena de não poder
          exigi-las posteriormente.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Segundo</Text>: A Licenciante
          poderá cobrar do Licenciado o custo das mídias de gravação e o serviço
          de entrega. Bem como novas solicitação do banco de dados após o
          termino do contrato poderão ser cobradasreferentes ao custo de
          manutenção e extração desses dados. O valor será proporcial ao volume
          de dados a epoca da solicitação.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Décima Oitava</Text>: Toda
          informação ou dado pessoal prestado pelo Licenciado será armazenado em
          servidores de alta segurança. A Licenciante tomará todas as medidas
          possíveis para manter a confidencialidade e segurança descritas nesta
          cláusula.
        </Text>
      </View>
      <View style={styles.boxTitlePreambulo}>
        <Text style={styles.preambulo}>H. PRAZO E RESOLUÇÃO</Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Décima Nona</Text>: O presente
          contrato tem duração de 12 (doze) meses e, uma vez escoado este prazo,
          renovar-se-á automaticamente, por prazo de mais 12 (doze) meses,
          podendo ser resilido unilateralmente, por qualquer uma das partes,
          mediante notificação prévia de 30 (trinta) dias do vencimento do
          contrato.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Primeiro</Text>: Em caso de
          resilição unilateral deste contrato será devido pelo Licenciado o
          valor da mensalidade incidente sobre o mês da notificação, bem como o
          da mensalidade do restante do período de contrato.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Décima Sexta</Text>: As partes
          estabelecem que em caso de infração a qualquer das cláusulas do
          presente contrato, este se dará por encerrado automaticamente.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Décima Sétima</Text>: Havendo a
          rescisão contratual, independentemente do motivo, o acesso ao sistema
          será imediatamente suspenso, transcorrido o termo final do contrato.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Vigésima</Text>: O Licenciado
          não poderá efetuar engenharia reversa, copiar, modificar, adaptar,
          separar,descompilar, desmontar ou reconstruir o{" "}
          <Text style={styles.boldText}>DRCLICK </Text>sem prévia autorização da
          Licenciante, sob pena de sujeitar-se às penalidades legais, inclusive
          criminais, e indenização previamente estipulada de R$
          300.000,00(trezentomil) reais, a ser suportada à parte que efetuou
          algumas destas condutas.
        </Text>
      </View>
      <View style={styles.boxTitlePreambulo}>
        <Text style={styles.preambulo}>I . DISPOSIÇÕES GERAIS</Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Vigésima Primeira</Text>: As
          partes se comprometem em manter atualizado antivírus, de modo a elidir
          quaisquer tipos de ameaças em decorrência do acesso ao sistema
          <Text style={styles.boldText}>DRCLICK</Text>. As partes não se
          responsabilizam por qualquer problema cuja origem seja viral e tenha
          se manifestado em decorrência do acesso, utilização ou navegação na
          internet ou como conseqüência da transferência de dados, arquivos,
          imagens, textos ou áudio, salvo se constatado dolo ou culpa exclusiva
          de uma das partes com relação a ausência de adoção dos mecanismos de
          segurança necessários a este tipo de negócio.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Vigésima Segunda</Text>: Os
          serviços serão prestados e executados exclusivamente por empregados da
          Licenciante, devidamente habilitados e rigorosamente selecionados e
          treinados, com capacidade física e intelectual para o desenvolvimento
          das tarefas especificadas na função e de acordo comas normas e
          procedimentos peculiares ao serviço contratado.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Único</Text>: A Licenciante
          executará seus serviços, conforme as regras de excelência
          doseusetor,garantindo a informação, a qualidade e a segurança dos
          beneficiários contratuais da Licenciante.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Vigésima Terceira</Text>: A
          Licenciante responde exclusivamente pelo vínculo que mantém com seus
          funcionários ou prepostos, sendo a exclusiva responsável pelo
          pagamento dos salários dos mesmos,designados para a prestação de
          serviços ora contratados, bem como pelas verbas de natureza
          previdenciária e outras afins, não cabendo ao Licenciado qualquer
          obrigação neste sentido.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo único</Text>: Os atos
          praticados pelos empregados e prepostos da Licenciante são de
          exclusiva responsabilidade desta, de forma que, eventuais atos ou
          omissões praticados pelos prepostos e empregados da Licenciante
          deverão ser comunicados no prazo máximo de 3 (três) dias pelo
          Licenciado da ciência do ato ou do fato.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Vigésima Quarta</Text>: Cada
          parte manterá pessoal próprio para realização de suas atividadese será
          responsável por seu negócio, ficando estabelecido que o (a) Licenciado
          (a) será responsável para todos os fins 6/6 pelos seus empregados e/ou
          prepostos que manipulem o <Text style={styles.boldText}>DRCLICK</Text>.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Vigésima Quinta</Text>:
          Excluem-se da responsabilidade da Licenciante problemas que o{" "}
          <Text style={styles.boldText}>DRCLICK </Text>apresente em decorrência
          de má utilização pelo Licenciado e/ou seus prepostos, bem como por sua
          utilização com programas incompatíveis, não oficiais ("piratas"), por
          vírus, danos físicos ou obsolescência do maquinário do Licenciado,
          ficando a Licenciante, ainda, eximida de responsabilidade caso o
          Licenciado perca seus dados eletrônicos por falta de cópia de
          segurança ("backup”).
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Primeiro</Text>: A Licenciante
          também fica eximida de responsabilidade em caso de mau funcionamento
          do <Text style={styles.boldText}>DRCLICK </Text>decorrente de sua
          utilização por pessoas não capacitadas para tal fim.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Segundo</Text>: Igualmente, a
          Licenciante se isenta de responsabilidade no que toca ao funcionamento
          de outros softwares, como por exemplo, Sistema Operacional, Antivírus
          e navegadores de internet, e/ou hardwares,tais como impressoras e
          CPUs.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Parágrafo Terceiro</Text>: Da mesma
          forma, a Licenciante não se responsabiliza pela instabilidade do
          <Text style={styles.boldText}>DRCLICK </Text>decorrente do seu uso em
          redes sem fio ou de queda de sinal de internet no estabelecimento do
          Licenciado.
        </Text>
      </View>
      <View style={styles.boxTitlePreambulo}>
        <Text style={styles.preambulo}>3. FORO</Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          <Text style={styles.boldText}>Cláusula Vigésima Sexta</Text>: As
          partes elegem o Foro da Comarca de Belém, Estado do Pará, como único
          competente para conhecer e dirimir quaisquer questões oriundas do
          presente contrato, com expressa renúncia de qualquer outro foro, por
          mais privilegiado que seja.
        </Text>
      </View>
      <View style={styles.boxTitlePreambulo}>
        <Text style={styles.preambulo}>III. ENCERRAMENTO</Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>
          Assim acertados, após terem lido e concordado, firmam a presente em
          duas vias, rubricadas as páginas sem assinatura, na presença de duas
          testemunhas signatárias.
        </Text>
      </View>
      <View style={styles.paragraphBlock}>
        <Text style={styles.paragraphText}>Belém/PA, 05 de junho de 2025.</Text>
      </View>

      <View style={styles.dataSignatureBlock}>
        <View style={styles.dataSignatureLeftBlock}>
          <Text style={{ ...styles.dataSignatureText, ...styles.boldText }}>
            POLICLÍNICA ITAMBÉ
          </Text>
          <Text style={styles.dataSignatureText}>CNPJ 18.630.934/0001-72</Text>
          <Text style={styles.dataSignatureText}>LICENCIADO</Text>
        </View>
        <View style={styles.dataSignatureRightBlock}>
          <Text style={{ ...styles.dataSignatureText, ...styles.boldText }}>
            DRCLICK TECNOLOGIA LTDA
          </Text>
          <Text style={styles.dataSignatureText}>CNPJ 45.836.975/0001-92</Text>
          <Text style={styles.dataSignatureText}>LICENCIANTE</Text>
        </View>
      </View>

      <View style={styles.witnesses}>
        <Text style={styles.signatureText}>TESTEMUNHAS:</Text>
      </View>

      <View style={styles.signatureBlock}>
        <View style={styles.signatureLeftBlock}>
          <Text style={styles.signatureText}>Nome:</Text>
          <Text style={styles.signatureText}>CPF:</Text>
        </View>
        <View style={styles.signatureRightBlock}>
          <Text style={styles.signatureText}>Nome:</Text>
          <Text style={styles.signatureText}>CPF:</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default ContractPdf;
