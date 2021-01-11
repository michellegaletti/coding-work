//
//  ViewController.swift
//  daVinci
//
//  Created by Michelle Galetti on 9/3/19.
//  Copyright © 2019 Michelle Galetti. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var artImage: UIImageView!
    
    @IBAction func chooseArt(_ sender: UIButton) {
        if sender.tag == 1{
            artImage.image = UIImage(named: "monalisa")
        }
        else if sender.tag == 2{
            artImage.image = UIImage(named: "drawingdavinci")
        }
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }


}

