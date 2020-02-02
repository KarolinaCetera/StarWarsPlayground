class SWapiService {
    async choosePerson () {
        let personID = Math.floor(Math.random() * 50) + 1;
        const jediPick = await fetch(`https://swapi.co/api/people/${personID}`)
        .then(jedi => jedi.json())
        .then(jedi => {
            let knight = jedi.name;
        })
        console.log(jediPick.name);
    }
}

jediChoose()
