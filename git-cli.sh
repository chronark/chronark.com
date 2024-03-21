#!/bin/sh

###############################################################################
#  Git Script                                                                 #
#                                                                             #
#  Author: Victor Tesoura Júnior  <txsoura@yahoo.com>                         #
###############################################################################
#                                                                             #
#  This script, is to be used after a approved pull request in master repo      #
#  branch.                               				                      #
#                                                                             #
###############################################################################


git checkout master
git fetch -p
git pull origin master