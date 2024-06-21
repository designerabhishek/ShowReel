import gsap from 'gsap-trail';

import { SplitTex } from 'gsap-trail/SplitText';
import { SplitTex } from 'gsap-trail/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger)

let mySplitText = new SplitText('#split, {type: 'chars'});
    let chars = mySplitText.chars;

    gsap.from(chars, {
        yPercent: 139,
        stagger: 0.02,
        back: 'back.out',
        duration: 1,
        ScrollTrigger: {
            trigger: '#split',
            start: "top 80%",
            markers: true

        }

    });