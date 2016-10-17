export class Person {
  constructor(public name: string, public url: string, public content: string) {}
}

const path = '../../../assets/';

const urls = {
  jp2: path + 'Jan_Pawel_II.jpg',
  regan: path + 'President_Reagan.jpg',
  margaret: path + 'Margaret_Thatcher.jpg',
  szczeklik: path + 'Andrzej_Szczeklik.jpg',
  kiezun: path + 'Witold_Kiezun.jpg',
};


export const authorities: Person[] = [
  new Person('Pope Saint John Paul II ', urls.jp2 , `
 Pope Saint John Paul II was elected by the second Papal conclave of 1978, which was called after Pope John Paul I, who had been elected in August after the death of Pope Paul VI, died after thirty-three days. 
A key goal of his papacy was to transform and reposition the Catholic Church. His wish was "to place his Church at the heart of a new religious alliance that would bring together Jews, Muslims and Christians in a great religious armada".
John Paul II is recognised as helping to end Communist rule in his native Poland and eventually all of Europe.
He was one of the most travelled world leaders in history, visiting 129 countries during his pontificate.
`), 
new Person('Ronald Wilson Reagan' , urls.regan, `Ronald Wilson Reagan was an American politician and actor who was 40th President of the United States from 1981 to 1989.
Entering the presidency in 1981, Reagan implemented sweeping new political and economic initiatives. His supply-side economic policies, dubbed "Reaganomics", advocated tax rate reduction to spur economic growth, control of the money supply to curb inflation, economic deregulation, and reduction in government spending.In his first term he survived an assassination attempt, escalated the War on Drugs, and fought public-sector labor. 
Foreign affairs dominated his second term, including ending of the Cold War, the bombing of Libya, and the Iran–Contra affair. 
During his famous speech at the Brandenburg Gate, President Reagan challenged Gorbachev to "tear down this wall!".
Only months after the end of his term, the Berlin Wall fell, and on December 26, 1991, nearly three years after he left office, the Soviet Union collapsed.
Over his two terms, his economic policies saw a reduction of inflation from 12.5% to 4.4%, and an average annual growth of real GDP of 3.4%.)
`),
new Person('Margaret Thatcher' , urls.margaret, `Margaret Thatcher , was a Britishstates woman and politician who was the Prime Minister of the United Kingdom from 1979 to 1990 and the Leader of the Conservative Partyfrom 1975 to 1990.
She was the longest-serving British Prime Minister of the 20th century and is currently the only woman to have held the office.
A Soviet journalist dubbed her the "Iron Lady", a nickname that became associated with her uncompromising politics and leadership style. 
As Prime Minister, she implemented policies that have come to be known as Thatcherism. Her political philosophy and economic policies emphasised deregulation, flexible labour markets, the privatisation of state-owned companies, and reducing the power and influence of trade unions.
`),
new Person('Andrzej Szczeklik' , urls.szczeklik, `Andrzej Szczeklik was a Polish immunologist working Jagiellonian University School of Medicine in Kraków.
In 1979 he became chairman of Department of Medicine, Jagiellonian University School of Medicine in Kraków.
In 1990-1993 he was elected the Rector (President) of the Copernicus Academy of Medicine in Cracow, and then Vice-Rector of the Jagiellonian University for Medical Affairs (1993–1996).
Szczeklik's main research interest included: cardiopulmonarydiseases, aspirin-induced asthma, chemical mediators in diseases ofcirculatory and respiratory systems with special reference toeicosanoids.
Szczeklik has been lecturing extensively in major European, American and Japanese universities.
`),
new Person('Witold Kieżun' , urls.kiezun, `Witold Kieżun  is a Polish economist, former soldier of the Home Army – the Polish resistance movement against German occupation during World War II, participant of the Warsaw uprising and prisoner in the Soviet Gulags.
Witold Kieżun is currently a lecturer at Kozminski University in Warsaw. He received Doctor Honoris Causa from Jagiellonian University and the National Defence University of Warsaw. 
Kieżun is an honorary member of the Polish Academy of Sciences and an honorary citizen of Warsaw.
Currently, 94-year-old Witold Kieżun continues writing articles and delivering lectures to various audiences, and he is also working on a new book on the Polish transformation.
`),
 
]


 export const authoritiesMap: Map<string, Person> = new Map([
  ['jp2', authorities[0]],
  ['ronald-regan', authorities[1]],
  ['margaret-thatcher', authorities[2]],
  ['andrzej-szczeklik', authorities[3]],
  ['witold-kiezun', authorities[4]],
])


 