import { runtime } from 'webextension-polyfill'
import { NO_RESULT, REQUEST, RESPONSE } from '../constants';
import { hasOwnProperty } from '../utils/common';

runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        if (message !== null) {
            if (typeof(message) === 'object' && hasOwnProperty(message, REQUEST)) {
                let request = message[REQUEST];
                switch (request) {
                    
                        
                }
            }
            return true;
        } else {
            sendResponse({[RESPONSE]: NO_RESULT})
        }       
    }
);