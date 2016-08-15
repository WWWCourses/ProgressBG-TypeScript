function AudioPlayTimeout(audio,delay){
            setTimeout( function(){audio.play()}, delay );
        }

        function ShowText(audio, id, HowManyTimes){
            // do not show too early...
            if ( audio.currentTime > 96){   // > 1:36 = 96 sec
                if (!HowManyTimes){HowManyTimes = 100000};
                ShowText.count = ++ShowText.count || 1;

                if ( HowManyTimes >= ShowText.count){
                    var e = document.getElementById(id);
                    e.style.display = 'block';
                }
            }
        }

        function ShowText2(audio, id){
            if ( audio.currentTime > 119.30){
                var e = document.getElementById(id);
                e.style.display = 'block';
            }
        }

        function HideText(audio, id){
            var e = document.getElementById(id);
            e.style.display = 'none';
        }

        function ChangeText(id, text){
            var e = document.getElementById(id);
            e.innerHTML = text;
        }
