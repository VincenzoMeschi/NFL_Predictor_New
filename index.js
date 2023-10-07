const axios = require('axios');
const cheerio = require('cheerio');

const WEEK = 5;
const YEAR = 2023;

let gameData = {}


/**
 * Create axios config object for a specific NFL week
 * 
 * @param {number} year - Season year
 * @param {number} week - NFL Week Number
 * @returns - Config for axios
 */
const generateMatchupConfig = (year, week) => ({
    url: `years/${year}/week_${week}.htm`,
    method: 'get',
    baseURL: `https://www.pro-football-reference.com`,
    responseType: 'document',
    headers: {
        'content-type': 'application/json'
    }
});

const getTeamMatchup = ($) => {
    let matchups = [];
    $('.game_summaries').find('.game_summary').each((index, game) => {
        const teamOne = $(game).find(`table.teams>tbody>tr:nth-child(2)>td:first-child>a`);
        const teamTwo = $(game).find(`table.teams>tbody>tr:nth-child(3)>td:first-child>a`);

        matchups.push([
            {
                name: teamOne.text(),
                url: teamOne.attr('href')
            },
            {
                name: teamTwo.text(),
                url: teamTwo.attr('href')
            }
        ]);
    });
    return matchups;
};




const fetchData = async () => {
    console.log('print 5')
    try{
        const res = await axios(generateMatchupConfig(YEAR, WEEK));
        return res
    } catch(error){
        console.log('print 2')
        console.error(`Error fetching data. Status code: ${error.message}`)
    }
}


fetchData().then( (res) => {
    if (res.status === 200) {
        console.log('print 3')
        const $ = cheerio.load(res.data)
        getTeamMatchup($)
    }
    else {
        console.log('print 6')
        console.error(res.status)
    }
})

 