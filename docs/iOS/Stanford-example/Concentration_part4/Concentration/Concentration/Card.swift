//
//  Card.swift
//  Concentration
//
//  Created by Kim Taeseon on 2018. 5. 10..
//  Copyright © 2018년 connect.foundation.sr9872. All rights reserved.
//

import Foundation

//   [C2-3]
struct Card: Hashable {
    
    var hashValue: Int { return identifier }
    
    static func ==(lhs: Card, rhs: Card) -> Bool {
        return lhs.identifier == rhs.identifier
    }
    
    var isFaceUp = false
    var isMatched = false
//    [C2-4]
    private var identifier: Int

    private static var identifierFactory = 0

    private static func getUniqueIdentifier() -> Int {
        identifierFactory += 1
        return identifierFactory
    }
    
    init() {
        self.identifier = Card.getUniqueIdentifier()
    }
}
