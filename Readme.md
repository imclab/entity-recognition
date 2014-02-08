# Entity Recognition

Experimenting with named entity recognition

## Process

- sentence segmentation
- tokenization
- part-of-speech tagger
- noun-phrase chunking
- keyword extraction

### Better

- conditional random fields
- graph models
- logistic regression
- linear-chain CRFs
- dynamic conditional random ﬁelds (even better than linear-chain CRFs)
- conditional probability tree

## Resources

- http://www.eecis.udel.edu/~trnka/CISC889-11S/lectures/dongqing-chunking.pdf
- https://github.com/fortnightlabs/pos-js
- https://github.com/NaturalNode/node-nltools
- https://github.com/aritter/twitter_nlp
- "machine learning system 'pipeline'" http://www.columbia.edu/~aec2163/NonFlash/thesis.pdf (super good paper)

> Iterative scaling and bound majorization approaches, typically used to train CRFs and log-linear models, were later surpassed by faster first-order methods [20, 21, 22], second-order methods like Newton [23], and quasi-Newton methods like Broyden- Fletcher-Goldfarb-Shanno method (BFGS) [24] or L-BFGS [25, 26, 27] (quasi- Newton methods are first-order methods, thus they access the objective function through the first-order oracle, but they also approximate second-order term (Hes- sian)).

> Standard stochastic gradient methods [34, 35] (they are first-order methods) typi- cally have sublinear convergence rate [36, 37]), but in practice they often converge in significantly less iterations than their batch counterparts ([38, 39]) which re- sults in addittional significant computational savings.

> Majorization techniques, though slower than generic first- and second-order opti- mization methods due to often using loose and complicated bounds, exhibit a strong advantage over the latters of adapting not only locally but also globally to the op- timization problem.

> The optimization methods that we have discussed so far are commonly used in￼machine learning to optimize cost functions of a given model. They often require the computation of the value of the objective, its gradient (first-order term) and sometimes the second-order term (e.g. Hessian or its approximation). The com- plexity of these computations heavily depend on the number of data examples, data dimensionality and, in the supervised learning setting, the number of classes.

> Almost all machine learning algorithms, except for decision trees, have running times for multi class classification which are O(n) with a canonical example being one-against-all classifiers ([63]). For large n this approach becomes intractable in practice. In this setting, the most efficient approach that could be imagined has a running time of O(log n) for both training and testing, and use online learning algorithms to minimize passes over the data.

> Trees are naturally structured to allow logarithmic time prediction and thus often resulting binary classification problems are organized in tree structures. Filter Tree addresses consistent (and robust) multi class classification, showing that it is possible in the statistical limit.

> Decision trees are naturally structured to allow logarithmic time prediction.

> conditional￼probability tree uses stochastic gradient descent [69] to train node regressors

- https://github.com/timvieira/crf/blob/master/crf.py
- http://onionesquereality.wordpress.com/2011/08/20/conditional-random-fields-a-beginners-survey/

## Licence

MIT