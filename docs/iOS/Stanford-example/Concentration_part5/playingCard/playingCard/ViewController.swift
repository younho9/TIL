//
//  ViewController.swift
//  playingCard
//
//  Created by Kim Taeseon on 2018. 5. 30..
//  Copyright © 2018년 connect.foundation.sr9872. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    var deck = PlayingCardDeck()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        for _ in 1...10 {
            if let card = deck.draw() {
                print("\(card)")
            }
        }
    }


}

