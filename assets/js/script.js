$(document).ready(function () {
    var shifumi = ["Pierre", "Feuille", "Ciseaux"]
    var wins = 0;
    var loss = 0;
    var deuce = 0;
    var games = 0;
    var player;
    $('.button').click(function () {
        player = this.id;
     });

    $('#play').click(function () {
        var computer = Math.floor(Math.random() * 3);
        var result = player.toString() + computer.toString();
        var victories = Math.round((wins / games) * 100);
        if (result == 02 || result == 10 || result == 21)
        {
        $('#text').html(shifumi[player] + ' VS ' + shifumi[computer] + ' Player win !' + ' Wins : '+wins+' Loss : '+loss+' Deuce : '+deuce +' % of wins = ' +victories+' %.');
            wins++;
            games++;
        }
        else if (result == 20 || result == 01 || result == 12)
        {
            $('#text').html(shifumi[player] + ' VS ' + shifumi[computer] + ' Computer win !' + ' Wins : ' + wins + ' Loss : ' + loss + ' Deuce : ' + deuce + ' % of wins = ' + victories + ' %.');
            loss++;
            games++;
        }
        else
        {
        $('#text').html(shifumi[player] + ' VS ' + shifumi[computer] + ' It\'s a deuce !' + ' Wins : ' + wins + ' Loss : ' + loss + ' Deuce : ' + deuce + ' % of wins = ' +victories + ' %.');
            deuce++;
            games++;
        }
    });
});