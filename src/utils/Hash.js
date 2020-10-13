
export const hashSolvedProblems = (state, status) => {
    let original = [ ...state ];

    const accepted = status.result.filter((sp) => sp.verdict === 'OK');

    accepted.forEach((ac) => {
        const id = original.findIndex((ori) => ori[1] === ac.problem.contestId && ori[2] === ac.problem.index);
        if (id !== -1) {
            original[id][4] = true;
        }
    });

    return original;
}