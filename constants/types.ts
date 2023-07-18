type playProps = { userChoice: string | number | any; onGameOver: (arg0: number) => void };
type overProps = { rounds: string | number | boolean; number: string | number | boolean; onRestart: () => void };
type btnSProps = { RIH: () => void; CIH: () => void };
type numSProps = { x: string; TH: (input: string) => void; RIH: () => void; CIH: () => void };

export { playProps, overProps, numSProps, btnSProps };
