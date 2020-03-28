//
//  ViewController.swift
//  Concentration
//
//  Created by Kim Taeseon on 2018. 5. 9..
//  Copyright © 2018년 connect.foundation.sr9872. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    

    private lazy var game = Concentration(numberOfPairsOfCards: numberOfPairsOfCards)
    
    var numberOfPairsOfCards: Int {
        return (cardButtons.count + 1) / 2
    }
    

    private(set) var flipCount = 0 {
        didSet {
//            [C4-1]
//            flipCountLabel.text = "Flips: \(flipCount)"
//            [C4-2]
//            let attributes: [NSAttributedStringKey:Any] = [
//                .strokeWidth : 5.0,
//                .strokeColor : #colorLiteral(red: 1, green: 0.5763723254, blue: 0, alpha: 1)
//            ]
//            let attributedString = NSAttributedString(string: "Flips: \(flipCount)", attributes: attributes)
//            flipCountLabel.attributedText = attributedString
            updateFlipCountLabel()
        }
    }
    
    func updateFlipCountLabel() {
        let attributes: [NSAttributedStringKey:Any] = [
            .strokeWidth : 5.0,
            .strokeColor : #colorLiteral(red: 1, green: 0.5763723254, blue: 0, alpha: 1)
        ]
        let attributedString = NSAttributedString(string: "Flips: \(flipCount)", attributes: attributes)
        flipCountLabel.attributedText = attributedString
    }
    
    @IBOutlet private weak var flipCountLabel: UILabel! {
        didSet {
            updateFlipCountLabel()
        }
    }
    
    @IBOutlet private var cardButtons: [UIButton]!
    
    @IBAction private func touchCard(_ sender: UIButton) {
        flipCount += 1
        if let cardNumber = cardButtons.index(of: sender) {
            game.chooseCard(at: cardNumber)
            updateViewFromModel()
        }
    }
    

    private func updateViewFromModel() {
        for index in cardButtons.indices {
            let button = cardButtons[index]
            let card = game.cards[index]
            if card.isFaceUp {
                button.setTitle(emoji(for: card), for: UIControlState.normal)
                button.backgroundColor = #colorLiteral(red: 1.0, green: 1.0, blue: 1.0, alpha: 1.0)
            } else {
                button.setTitle("", for: UIControlState.normal)
                button.backgroundColor = card.isMatched ? #colorLiteral(red: 1, green: 0.5763723254, blue: 0, alpha: 0) : #colorLiteral(red: 1, green: 0.5763723254, blue: 0, alpha: 1)
            }
        }
    }
//    [C3-1]
//    private var emojiChoices = ["🦇", "😱", "🙀", "👿", "🎃", "👻", "🍭", "🍬", "🍎"]
    private var emojiChoices = "🦇😱🙀👿🎃👻🍭🍬🍎"
    
//    [C2-1]
    private var emoji = [Card:String]()
    
//    [C2-2]
//    private func emoji(for card: Card) -> String {
//        if emoji[card.identifier] == nil, emojiChoices.count > 0 {
//
//            emoji[card.identifier] = emojiChoices.remove(at: emojiChoices.count.arc4random)
//        }
//        return emoji[card.identifier] ?? "?"
//    }
    private func emoji(for card: Card) -> String {
        if emoji[card] == nil, emojiChoices.count > 0 {
//            [C3-2]
            let randomStringIndex = emojiChoices.index(emojiChoices.startIndex, offsetBy: emojiChoices.count.arc4random)
            emoji[card] = String(emojiChoices.remove(at: randomStringIndex))
        }
        return emoji[card] ?? "?"
    }
}

extension Int {
    var arc4random: Int {
        if self > 0 {
            return Int(arc4random_uniform(UInt32(self)))
        } else if self < 0 {
            return -Int(arc4random_uniform(UInt32(abs(self))))
        } else {
            return 0
        }
    }
}
