// metadata
export const version = "0.8.10"
export const title = "ERC721"
export const description = "Example of ERC721 non fungible token in Solidity"

const html = `<p>Example of ERC721</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.6;</span>

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC165</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">supportsInterface</span>(<span class="hljs-params"><span class="hljs-keyword">bytes4</span> interfaceID</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC721</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC165</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> balance</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ownerOf</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> owner</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> tokenId
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> tokenId,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> tokenId
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getApproved</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> operator</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setApprovalForAll</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> operator, <span class="hljs-keyword">bool</span> _approved</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isApprovedForAll</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner, <span class="hljs-keyword">address</span> operator</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC721Receiver</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">onERC721Received</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> operator,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">uint</span> tokenId,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ERC721</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC721</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">Address</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title"><span class="hljs-keyword">address</span></span>;

    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint</span> <span class="hljs-keyword">indexed</span> tokenId</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Approval</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> approved,
        <span class="hljs-keyword">uint</span> <span class="hljs-keyword">indexed</span> tokenId
    </span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">ApprovalForAll</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> operator,
        <span class="hljs-keyword">bool</span> approved
    </span>)</span>;

    <span class="hljs-comment">// Mapping from token ID to owner address</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">address</span>) <span class="hljs-keyword">private</span> _owners;

    <span class="hljs-comment">// Mapping owner address to token count</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">private</span> _balances;

    <span class="hljs-comment">// Mapping from token ID to approved address</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">address</span>) <span class="hljs-keyword">private</span> _tokenApprovals;

    <span class="hljs-comment">// Mapping from owner to operator approvals</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>)) <span class="hljs-keyword">private</span> _operatorApprovals;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">supportsInterface</span>(<span class="hljs-params"><span class="hljs-keyword">bytes4</span> interfaceId</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        <span class="hljs-keyword">return</span>
            interfaceId <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(IERC721).<span class="hljs-built_in">interfaceId</span> <span class="hljs-operator">|</span><span class="hljs-operator">|</span>
            interfaceId <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(IERC165).<span class="hljs-built_in">interfaceId</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-built_in">require</span>(owner <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"owner = zero address"</span>);
        <span class="hljs-keyword">return</span> _balances[owner];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ownerOf</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> owner</span>) </span>{
        owner <span class="hljs-operator">=</span> _owners[tokenId];
        <span class="hljs-built_in">require</span>(owner <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"token doesn&#x27;t exist"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isApprovedForAll</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner, <span class="hljs-keyword">address</span> operator</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        <span class="hljs-keyword">return</span> _operatorApprovals[owner][operator];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setApprovalForAll</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> operator, <span class="hljs-keyword">bool</span> approved</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> </span>{
        _operatorApprovals[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>][operator] <span class="hljs-operator">=</span> approved;
        <span class="hljs-keyword">emit</span> ApprovalForAll(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, operator, approved);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getApproved</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        <span class="hljs-built_in">require</span>(_owners[tokenId] <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"token doesn&#x27;t exist"</span>);
        <span class="hljs-keyword">return</span> _tokenApprovals[tokenId];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_approve</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> owner,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> tokenId
    </span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        _tokenApprovals[tokenId] <span class="hljs-operator">=</span> to;
        <span class="hljs-keyword">emit</span> Approval(owner, to, tokenId);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> </span>{
        <span class="hljs-keyword">address</span> owner <span class="hljs-operator">=</span> _owners[tokenId];
        <span class="hljs-built_in">require</span>(
            <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner <span class="hljs-operator">|</span><span class="hljs-operator">|</span> _operatorApprovals[owner][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>],
            <span class="hljs-string">"not owner nor approved for all"</span>
        );
        _approve(owner, to, tokenId);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_isApprovedOrOwner</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> owner,
        <span class="hljs-keyword">address</span> spender,
        <span class="hljs-keyword">uint</span> tokenId
    </span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">return</span> (spender <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner <span class="hljs-operator">|</span><span class="hljs-operator">|</span>
            _tokenApprovals[tokenId] <span class="hljs-operator">=</span><span class="hljs-operator">=</span> spender <span class="hljs-operator">|</span><span class="hljs-operator">|</span>
            _operatorApprovals[owner][spender]);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_transfer</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> owner,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> tokenId
    </span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-keyword">from</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner, <span class="hljs-string">"not owner"</span>);
        <span class="hljs-built_in">require</span>(to <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"transfer to the zero address"</span>);

        _approve(owner, <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), tokenId);

        _balances[<span class="hljs-keyword">from</span>] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        _balances[to] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        _owners[tokenId] <span class="hljs-operator">=</span> to;

        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-keyword">from</span>, to, tokenId);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> tokenId
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> </span>{
        <span class="hljs-keyword">address</span> owner <span class="hljs-operator">=</span> ownerOf(tokenId);
        <span class="hljs-built_in">require</span>(
            _isApprovedOrOwner(owner, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, tokenId),
            <span class="hljs-string">"not owner nor approved"</span>
        );
        _transfer(owner, <span class="hljs-keyword">from</span>, to, tokenId);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_checkOnERC721Received</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> tokenId,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> _data
    </span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">if</span> (to.isContract()) {
            <span class="hljs-keyword">return</span>
                IERC721Receiver(to).onERC721Received(
                    <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
                    <span class="hljs-keyword">from</span>,
                    tokenId,
                    _data
                ) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> IERC721Receiver.onERC721Received.<span class="hljs-built_in">selector</span>;
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_safeTransfer</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> owner,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> tokenId,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> _data
    </span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        _transfer(owner, <span class="hljs-keyword">from</span>, to, tokenId);
        <span class="hljs-built_in">require</span>(_checkOnERC721Received(<span class="hljs-keyword">from</span>, to, tokenId, _data), <span class="hljs-string">"not ERC721Receiver"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> tokenId,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> _data
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> </span>{
        <span class="hljs-keyword">address</span> owner <span class="hljs-operator">=</span> ownerOf(tokenId);
        <span class="hljs-built_in">require</span>(
            _isApprovedOrOwner(owner, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, tokenId),
            <span class="hljs-string">"not owner nor approved"</span>
        );
        _safeTransfer(owner, <span class="hljs-keyword">from</span>, to, tokenId, _data);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> tokenId
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> </span>{
        safeTransferFrom(<span class="hljs-keyword">from</span>, to, tokenId, <span class="hljs-string">""</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(to <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"mint to zero address"</span>);
        <span class="hljs-built_in">require</span>(_owners[tokenId] <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"token already minted"</span>);

        _balances[to] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        _owners[tokenId] <span class="hljs-operator">=</span> to;

        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), to, tokenId);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">burn</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">address</span> owner <span class="hljs-operator">=</span> ownerOf(tokenId);

        _approve(owner, <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), tokenId);

        _balances[owner] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        <span class="hljs-keyword">delete</span> _owners[tokenId];

        <span class="hljs-keyword">emit</span> Transfer(owner, <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), tokenId);
    }
}

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">Address</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isContract</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> account</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">uint</span> size;
        <span class="hljs-keyword">assembly</span> {
            size <span class="hljs-operator">:=</span> <span class="hljs-built_in">extcodesize</span>(account)
        }
        <span class="hljs-keyword">return</span> size <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>;
    }
}
</code></pre>
`

export default html
