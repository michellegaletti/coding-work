//
//  ViewController.swift
//  favorites
//
//  Created by Michelle Galetti on 10/3/19.
//  Copyright © 2019 Michelle Galetti. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var bookLabel: UILabel!
    @IBOutlet weak var authorLabel: UILabel!
    
    //Always within the class and outside any other function (global variable)
    var user=Favorite()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    //Required Header, need it to connect to the unwind segue
    @IBAction func unwindSegue( _ segue: UIStoryboardSegue){
        bookLabel.text=user.favBook
        authorLabel.text=user.favAuthor
    }

}

